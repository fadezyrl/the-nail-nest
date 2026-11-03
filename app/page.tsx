import type { JSX } from "react";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { Story } from "@/components/sections/Story/Story";
import { Services } from "@/components/sections/Services/Services";
import { NailArt } from "@/components/sections/NailArt/NailArt";
import { Artist } from "@/components/sections/Artist/Artist";
import { Experience } from "@/components/sections/Experience/Experience";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { Booking } from "@/components/sections/Booking/Booking";
import { Contact } from "@/components/sections/Contact/Contact";

export default function Home(): JSX.Element {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Services />
        <NailArt />
        <Artist />
        <Experience />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
