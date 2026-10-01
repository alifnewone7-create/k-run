import { useLenis } from "@/hooks/useLenis";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { MemberReviews } from "@/components/landing/MemberReviews";
import { Learn } from "@/components/landing/Learn";
import { Results } from "@/components/landing/Results";
import { Marquee } from "@/components/landing/Marquee";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Divider = ({ id }) => (
  <div data-testid={`section-divider-${id}`} className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" aria-hidden>
    <div className="section-divider" />
  </div>
);

export default function LandingPage() {
  useLenis();
  return (
    <main data-testid="landing-page" className="relative text-[#D4D4DE]">
      <div className="grain" aria-hidden />
      <Nav />
      <Hero />
      <Divider id="hero" />
      <Benefits />
      <Divider id="benefits" />
      <MemberReviews />
      <Divider id="reviews" />
      <Learn />
      <Divider id="learn" />
      <Results />
      <Marquee />
      <Testimonials />
      <Divider id="testimonials" />
      <FAQ />
      <Divider id="faq" />
      <FinalCTA />
      <Footer />
    </main>
  );
}
