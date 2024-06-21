import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/about";
import Classes from "./components/Classes";
import Team from "./components/Team";
import Membership from "./components/Membership";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import { Suspense } from "react";

export default function Home() {
  return (
<main className="">
  <Hero />
  <About/>
  <Classes/>
  <Team/>
  <Membership/>
  <Testimonials/>
  <Suspense>

  <Blogs/>
  </Suspense>
</main>
  );
}
