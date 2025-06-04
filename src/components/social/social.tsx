import styled from "styled-components";
import company1 from "../../assets/company-1.svg";
import company2 from "../../assets/company-2.svg";
import company3 from "../../assets/company-3.svg";
import company4 from "../../assets/company-4.svg";
import company5 from "../../assets/company-5.svg";
import company6 from "../../assets/company-6.svg";
import company7 from "../../assets/company-7.svg";
import associations from "../../assets/associations.svg";
import membership from "../../assets/membership.svg";
import club from "../../assets/clubs.svg";
const Wrapper = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.font};
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-size: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 2rem auto 0;
  max-width: 1200px;
  padding: 0 1rem;

  @media (min-width: 768px) {
    gap: 130px;
    padding: 0;
  }
`;

const CompanyLogo = styled.img`
  max-width: 120px;
  max-height: 60px;
  width: auto;
  height: auto;

  @media (min-width: 768px) {
    max-width: 150px;
  }
`;

const MembershipWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  padding: 0 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    margin: 3rem auto 0;
    gap: 3rem;
    padding: 0;
  }
`;

const MembershipCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 992px) {
    padding: 2rem;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
`;

const companies = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
];

export const Social = () => {
  return (
    <Wrapper>
      <Heading>Our clients</Heading>
      <Paragraph style={{ marginTop: "2rem" }}>
        We have been working with some Fortune 500+ clients
      </Paragraph>
      <LogoWrapper>
        {companies.map((company, index) => (
          <CompanyLogo
            key={`company-${index}`}
            src={company}
            alt={`company-${index + 1}`}
          />
        ))}
      </LogoWrapper>
      <Heading style={{ marginTop: "3rem" }}>
        Manage your entire community in a single system
      </Heading>
      <Paragraph style={{ marginTop: "1rem" }}>
        Who is Nextcent suitable for?
      </Paragraph>
      <MembershipWrapper>
        <MembershipCard>
          <IconWrapper>
            <img src={associations} alt="associations" />
          </IconWrapper>
          <Heading as="h3" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Membership Organisations
          </Heading>
          <Paragraph>
            Our membership management software provides full automation of
            membership renewals and payments
          </Paragraph>
        </MembershipCard>
        <MembershipCard>
          <IconWrapper>
            <img src={membership} alt="membership" />
          </IconWrapper>
          <Heading as="h3" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            National Associations
          </Heading>
          <Paragraph>
            Our membership management software provides full automation of
            membership renewals and payments
          </Paragraph>
        </MembershipCard>
        <MembershipCard>
          <IconWrapper>
            <img src={club} alt="club" />
          </IconWrapper>
          <Heading as="h3" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Clubs And Groups
          </Heading>
          <Paragraph>
            Our membership management software provides full automation of
            membership renewals and payments
          </Paragraph>
        </MembershipCard>
      </MembershipWrapper>
    </Wrapper>
  );
};
