import StickyNavbar from '@/components/layout/StickyNavbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/effects/CustomCursor';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Achievements from '@/components/sections/Achievements';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Closing from '@/components/sections/Closing';

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <StickyNavbar />
      <div className="page-container">
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Contact />
        <Closing />
        <Footer />
      </div>
    </>
  );
}
