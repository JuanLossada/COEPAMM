import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import History from "@/components/History";
import Courses from "@/components/Courses";
import PortalSection from "@/components/PortalSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";

export default function Home() {
  return (
    <>
      <RevealProvider />
      <Navbar />
      <main>
        <Hero />
        <About />
        <History />
        <Courses />
        <PortalSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
