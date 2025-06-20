import styled from "styled-components";
import Tesla from "../../assets/tesla.png";
import company1 from "../../assets/company-1.svg";
import company2 from "../../assets/company-2.svg";
import company3 from "../../assets/company-3.svg";
import company4 from "../../assets/company-4.svg";
import company5 from "../../assets/company-5.svg";
import company6 from "../../assets/company-6.svg";
const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 0;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const CompanyWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  max-width: 60ch;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.brand};
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.brand};
  font-weight: bold;
`;

const InsideCompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Image = styled.img`
  height: 100%;
  max-height: 400px;
  width: auto;
  object-fit: contain;

  @media (max-width: 600px) {
    max-width: 100%;
    height: auto;
  }
`;

const companies = [company1, company2, company3, company4, company5, company6];

export const Customer = () => {
  return (
    <Wrapper>
      <Image src={Tesla} alt="tesla " />
      <InsideCompanyWrapper>
        <Paragraph>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </Paragraph>
        <Heading>Tim Smith</Heading>
        <Paragraph>British Dragon Boat Racing Association</Paragraph>
        <CompanyWrapper>
          {companies.map((company, index) => (
            <img key={index} src={company} alt={`company-${index + 1}`} />
          ))}
          <StyledParagraph>Meet all customer - </StyledParagraph>
        </CompanyWrapper>
      </InsideCompanyWrapper>
    </Wrapper>
  );
};
