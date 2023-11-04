import CallToAction from "@/components/CallToAction";
import Explore from "@/components/Explore";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Explore />
      <CallToAction />
      <Partners />
    </main>
  );
}
