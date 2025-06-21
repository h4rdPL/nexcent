import styled from "styled-components";
import { Button } from "../Button/button";
import logo from "../../assets/logo-white.svg";
import instagram from "../../assets/instagram.svg";
import dribble from "../../assets/dribbble.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import { Send } from "lucide-react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 4rem 1rem;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.font};
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 1rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 150px;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 24px;
    height: 24px;
  }
`;

const FooterLinks = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LinkSection = styled.div`
  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const EmailWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
`;

const EmailInput = styled.input`
  padding: 0.75rem 2.5rem 0.75rem 0.75rem;
  border-radius: 6px;
  border: none;
  width: 100%;
  font-size: 0.875rem;
  background-color: #f0f0f0;
  color: #333;
`;

const SendIcon = styled(Send)`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #888;
  cursor: pointer;
`;

export const Footer = () => {
  return (
    <>
      <Wrapper>
        <Heading>
          Pellentesque suscipit <br /> fringilla libero eu.
        </Heading>
        <Button>Get a demo</Button>
      </Wrapper>
      <FooterWrapper>
        <FooterContainer>
          <FooterBrand>
            <img src={logo} alt="logo" />
            <p>Copyright © 2020 Nexcent ltd. All rights reserved</p>
            <SocialIcons>
              <img src={instagram} alt="instagram" />
              <img src={dribble} alt="dribble" />
              <img src={twitter} alt="twitter" />
              <img src={youtube} alt="youtube" />
            </SocialIcons>
          </FooterBrand>
          <FooterLinks>
            <LinkSection>
              <h2>Company</h2>
              <ul>
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </LinkSection>
            <LinkSection>
              <h2>Support</h2>
              <ul>
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </LinkSection>
            <LinkSection>
              <h2>Stay up to date</h2>
              <EmailWrapper>
                <EmailInput placeholder="Your email address" />
                <SendIcon />
              </EmailWrapper>
            </LinkSection>
          </FooterLinks>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
};
