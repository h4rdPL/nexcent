import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Logo from "../assets/logo.svg";
import styled, { css } from "styled-components";
import { Button } from "./button";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    padding: 1rem 2rem;
  }
`;

const NavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  @media (min-width: 768px) {
    margin-right: auto;
  }
`;

const Hamburger = styled(Menu)`
  cursor: pointer;
  width: 2rem;
  height: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const animationStyles = css<{ $isOpen: boolean }>`
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-10px)"};
`;

const MenuArea = styled.div<{ $isOpen: boolean }>`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;

  ${animationStyles}

  @media (min-width: 768px) {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const ListItem = styled.li`
  padding: 0.5rem;
`;

const SignUpWrapper = styled.div<{ $isOpen: boolean }>`
  justify-content: center;
  margin-top: auto;
  padding-top: 2rem;
  display: flex;

  ${animationStyles}

  @media (min-width: 768px) {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    margin-top: 0;
    padding-top: 0;
  }
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

  return (
    <Nav>
      <NavbarTop>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
        </LogoContainer>
        <Hamburger onClick={() => setIsOpen((prev) => !prev)} />
      </NavbarTop>

      <MenuArea $isOpen={isOpen}>
        <MenuList>
          <ListItem>
            <a href="#">Home</a>
          </ListItem>
          <ListItem>
            <a href="#">Service</a>
          </ListItem>
          <ListItem>
            <a href="#">Feature</a>
          </ListItem>
          <ListItem>
            <a href="#">Product</a>
          </ListItem>
          <ListItem>
            <a href="#">Testimonial</a>
          </ListItem>
          <ListItem>
            <a href="#">FAQ</a>
          </ListItem>
        </MenuList>
      </MenuArea>

      <SignUpWrapper $isOpen={isOpen}>
        <Button>Sign up</Button>
      </SignUpWrapper>
    </Nav>
  );
};
