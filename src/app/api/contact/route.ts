import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import Excel from 'exceljs';

// Define the path for the Excel file
const excelFilePath = path.join(process.cwd(), 'contact-submissions.xlsx');
const worksheetName = 'Submissions';

// Define the columns for the Excel sheet
const excelColumns = [
  { header: 'Name', key: 'name', width: 30 },
  { header: 'Email', key: 'email', width: 30 },
  { header: 'Subject', key: 'subject', width: 40 },
  { header: 'Message', key: 'message', width: 60 },
  { header: 'Timestamp', key: 'timestamp', width: 25 },
];

// Function to ensure the Excel file and worksheet exist
async function getWorksheet() {
  const workbook = new Excel.Workbook();
  try {
    // Try to read the existing workbook
    await workbook.xlsx.readFile(excelFilePath);
  } catch (error) {
    // If the file doesn't exist, create it with a worksheet and headers
    const worksheet = workbook.addWorksheet(worksheetName);
    worksheet.columns = excelColumns;
    await workbook.xlsx.writeFile(excelFilePath);
  }

  // Return the worksheet (either existing or newly created)
  return workbook.getWorksheet(worksheetName);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const workbook = new Excel.Workbook();
    const timestamp = new Date().toISOString();

    try {
      // Try to load the existing workbook
      await workbook.xlsx.readFile(excelFilePath);
      const worksheet = workbook.getWorksheet(worksheetName);
      // If worksheet doesn't exist, create it with headers
      if (!worksheet) {
        const newSheet = workbook.addWorksheet(worksheetName);
        newSheet.columns = excelColumns;
      }
    } catch (error) {
      // If file doesn't exist, create a new workbook and worksheet
      const worksheet = workbook.addWorksheet(worksheetName);
      worksheet.columns = excelColumns;
    }

    const worksheet = workbook.getWorksheet(worksheetName);
    if (worksheet) {
        worksheet.addRow({ name, email, subject, message, timestamp });
    } else {
        // This case should ideally not be reached due to the logic above
        throw new Error('Worksheet could not be found or created.');
    }

    // Write the updated workbook back to the file
    await workbook.xlsx.writeFile(excelFilePath);

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling form submission:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}