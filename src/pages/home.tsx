import { Hero } from "../components/hero/hero";
import { Navbar } from "../components/navbar/navbar";
import { Social } from "../components/social/social";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Social />
    </>
  );
};
