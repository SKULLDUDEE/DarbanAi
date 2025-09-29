// app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import Excel from 'exceljs';

// Constants
const EXCEL_FILE_PATH = path.join(process.cwd(), 'contact-submissions.xlsx');
const SHEET_NAME = 'Submissions';

const SHEET_COLUMNS = [
  { header: 'Name', key: 'name', width: 30 },
  { header: 'Email', key: 'email', width: 30 },
  { header: 'Subject', key: 'subject', width: 40 },
  { header: 'Message', key: 'message', width: 60 },
  { header: 'Timestamp', key: 'timestamp', width: 25 },
];

// Utility: Load or create workbook and worksheet
async function loadWorkbookWithSheet(): Promise<{ workbook: Excel.Workbook, worksheet: Excel.Worksheet }> {
  const workbook = new Excel.Workbook();

  try {
    await workbook.xlsx.readFile(EXCEL_FILE_PATH);
  } catch {
    // File doesn't exist; it will be created on save
  }

  let worksheet = workbook.getWorksheet(SHEET_NAME);
  if (!worksheet) {
    worksheet = workbook.addWorksheet(SHEET_NAME);
    worksheet.columns = SHEET_COLUMNS;
  }

  return { workbook, worksheet };
}

// POST handler
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const { workbook, worksheet } = await loadWorkbookWithSheet();

    // Add new row with timestamp
    worksheet.addRow({
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Save the updated workbook
    await workbook.xlsx.writeFile(EXCEL_FILE_PATH);

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
