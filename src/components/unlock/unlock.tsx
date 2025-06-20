import { Button } from "../Button/button";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Paragraph = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.grey};
  max-width: 40ch;

  @media (min-width: 768px) {
    max-width: 60ch;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const StyledButton = styled(Button)`
  align-self: start;
`;

type UnlockProps = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
};

export const Unlock = ({
  image,
  title,
  description,
  buttonText,
}: UnlockProps) => {
  return (
    <Wrapper>
      <img src={image} alt="section visual" />
      <InnerWrapper>
        <h1>{title}</h1>
        <Paragraph>{description}</Paragraph>
        <StyledButton>{buttonText}</StyledButton>
      </InnerWrapper>
    </Wrapper>
  );
};
