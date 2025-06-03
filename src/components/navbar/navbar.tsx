import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import styled from "styled-components";
import { Button } from "../Button/button";
import Logo from "../../assets/logo.svg";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem;
  }
`;

const NavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 0;
    width: auto;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Hamburger = styled(Menu)`
  cursor: pointer;
  width: 2rem;
  height: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CenterArea = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  background-color: white;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    display: flex;
    width: auto;
    flex-direction: row;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 2rem;
  }
`;

const ListItem = styled.li`
  padding: 0.5rem 1rem;

  a {
    color: #333;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #0066ff;
    }
  }
`;

const AuthButtons = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border-top: 1px solid #f0f0f0;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    border-top: none;
    margin-left: 2rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  color: #000;
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <Nav>
      <NavContainer>
        <NavbarTop>
          <LogoContainer>
            <img src={Logo} alt="Company Logo" />
          </LogoContainer>
          <Hamburger onClick={toggleMenu} />
        </NavbarTop>

        <CenterArea $isOpen={isOpen}>
          <MenuList>
            <ListItem>
              <a href="#" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </ListItem>
            <ListItem>
              <a href="#" onClick={() => setIsOpen(false)}>
                Service
              </a>
            </ListItem>
            <ListItem>
              <a href="#" onClick={() => setIsOpen(false)}>
                Feature
              </a>
            </ListItem>
            <ListItem>
              <a href="#" onClick={() => setIsOpen(false)}>
                Product
              </a>
            </ListItem>
            <ListItem>
              <a href="#" onClick={() => setIsOpen(false)}>
                Testimonial
              </a>
            </ListItem>
            <ListItem>
              <a href="#" onClick={() => setIsOpen(false)}>
                FAQ
              </a>
            </ListItem>
          </MenuList>

          <AuthButtons $isOpen={isOpen}>
            <StyledButton>Login</StyledButton>
            <Button>Sign up</Button>
          </AuthButtons>
        </CenterArea>
      </NavContainer>
    </Nav>
  );
};
