import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import WhyMyTrip from "@/components/landing/WhyMyTrip";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import ContactForm from "@/components/landing/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <WhyMyTrip />
      <Testimonials />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
