import { MoveRight } from "lucide-react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 2rem 0;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.grey};
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  max-width: 60ch;
  margin: 0 auto;
  padding-top: 1rem;
  @media (min-width: 768px) {
    width: 60ch;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem; /* Small gap on mobile */

  @media (min-width: 768px) {
    gap: 4rem; /* Larger gap on tablet and up */
  }
`;

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 10rem; /* Only add margin on larger screens */
  }
`;

const BlogParagraph = styled.p`
  width: 20ch;
  color: ${({ theme }) => theme.colors.font};
  font-weight: bold;
`;

const BlogLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.brand};
`;

export const Marketing = () => {
  return (
    <Wrapper>
      <Heading>Caring is the new marketing</Heading>
      <Paragraph>
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more.
      </Paragraph>
      <BoxWrapper>
        <BlogPost>
          <BlogParagraph>
            Creating Streamlined Safeguarding Processes with OneRen
          </BlogParagraph>
          <BlogLink href="#">
            Readmore
            <MoveRight />
          </BlogLink>
        </BlogPost>
        <BlogPost>
          <BlogParagraph>
            Creating Streamlined Safeguarding Processes with OneRen
          </BlogParagraph>
          <BlogLink href="#">
            Readmore
            <MoveRight />
          </BlogLink>
        </BlogPost>
        <BlogPost>
          <BlogParagraph>
            Creating Streamlined Safeguarding Processes with OneRen
          </BlogParagraph>
          <BlogLink href="#">
            Readmore <MoveRight />
          </BlogLink>
        </BlogPost>
      </BoxWrapper>
    </Wrapper>
  );
};
