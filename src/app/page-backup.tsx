import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import About from "@/components/about";
// import Testimonials from "@/components/testimonials";
// import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingElements from "@/components/floating-elements";
import ScrollProgress from "@/components/scroll-progress";
import CursorTrail from "@/components/cursor-trail";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ScrollProgress />
      <CursorTrail />
      <FloatingElements />
      <Navbar />
      <Hero />
      <Features />
      <About />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </div>
  );
}