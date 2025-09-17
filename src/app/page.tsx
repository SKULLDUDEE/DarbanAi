import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Features from '@/components/features';
import WhyChooseDarban from '@/components/why-choose-darban';
import HowItWorks from '@/components/how-it-works';
// import Pricing from '@/components/pricing';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Features />
        <WhyChooseDarban />
        <HowItWorks />
        {/* <Pricing /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
