import Login from "../assets/login.svg";
import PixelGrade from "../assets/pixelgrade.svg";
import { Navbar } from "../components/navbar/navbar";
import { Hero } from "../components/hero/hero";
import { Social } from "../components/social/social";
import { Unlock } from "../components/unlock/unlock";
import { Membership } from "../components/membership/membership";
import { Customer } from "../components/customer/customer";
import { Marketing } from "../components/marketing/marketing";
import { Footer } from "../components/footer/footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Social />
      <Unlock
        image={PixelGrade}
        title="The unseen of spending three years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum..."
        buttonText="Learn more"
      />
      <Membership />
      <Unlock
        image={Login}
        title="Growth through collaboration"
        description="By focusing on community, we've achieved incredible results with passionate people..."
        buttonText="Learn more"
      />
      <Customer />
      <Marketing />
      <Footer />
    </>
  );
};
