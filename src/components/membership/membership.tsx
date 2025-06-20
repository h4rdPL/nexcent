import styled from "styled-components";
import member from "../../assets/members.svg";
const Wrapper = styled.div`
  display: flex;
  gap: 8rem;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

const NumbersWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.font};
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.brand};
`;

export const Membership = () => {
  return (
    <Wrapper>
      <div>
        <Header>
          Helping a local <br />
          <Span>business reinvent itself</Span>
        </Header>
        <Paragraph>We reached here with our hard work and dedication</Paragraph>
      </div>
      <IconWrapper>
        <NumbersWrapper>
          <img src={member} alt="member" />
          <div>
            <h2>2,245,341</h2>
            <p>Members</p>
          </div>
        </NumbersWrapper>
        <NumbersWrapper>
          <img src={member} alt="member" />
          <div>
            <h2>2,245,341</h2>
            <p>Members</p>
          </div>
        </NumbersWrapper>
        <NumbersWrapper>
          <img src={member} alt="member" />
          <div>
            <h2>2,245,341</h2>
            <p>Members</p>
          </div>
        </NumbersWrapper>
        <NumbersWrapper>
          <img src={member} alt="member" />
          <div>
            <h2>2,245,341</h2>
            <p>Members</p>
          </div>
        </NumbersWrapper>
      </IconWrapper>
    </Wrapper>
  );
};
