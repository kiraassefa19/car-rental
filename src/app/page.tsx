import Header from "@/app/componets/Header";
import Hero from "@/app/componets/Hero";
import Cars from "@/app/componets/Cars";
import About from "@/app/componets/About";
import Why from "@/app/componets/Why";
import Testimonial from "@/app/componets/Testimonial";
import Cta from "@/app/componets/Cta";
import Footer from "@/app/componets/Footer";
import BackToTopBtn from "@/app/componets/BackToTopBtn";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto bg-white relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
    </main>
  );
}
