import styled from "styled-components";
import { Button } from "../Button/button";
import HeroImage from "../../assets/hero.svg";

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  min-height: 100vh;
  background-color: #f9f9f9;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 4rem 6rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 600px;

  h1 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.2;

    span {
      display: block;
      color: #4caf4f;
    }

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: #555;
    line-height: 1.5;
  }
`;

const Image = styled.img`
  width: 60%;
  max-width: 500px;
  height: auto;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const StyledButton = styled(Button)`
  align-self: flex-start;
  border-radius: 0;
  padding: 0.8rem 1.5rem;
`;

export const Hero = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <h1>
          Lessons and insights
          <span>from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <StyledButton>Register</StyledButton>
      </InnerWrapper>
      <Image src={HeroImage} alt="Hero" />
    </Wrapper>
  );
};
