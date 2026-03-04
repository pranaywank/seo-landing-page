import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Pipeline from "@/components/Pipeline";
import WhyNotDIY from "@/components/WhyNotDIY";
import Features from "@/components/Features";
import Proof from "@/components/Proof";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Pipeline />
        <WhyNotDIY />
        <Features />
        <Proof />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
