import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Typography from "../ui/Typography";

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndices.sticky};
    background-color: white;
    box-shadow: ${({ $scrolled }) =>
        $scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none"};
    transition: all 0.3s ease;
    padding: ${({ $scrolled }) => ($scrolled ? "0.75rem 0" : "1.5rem 0")};
`;

const HeaderContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
        display: none;
    }
`;

const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-right: 2rem;
`;

const NavLink = styled.li`
    margin: 0 1rem;

    a {
        color: ${({ theme }) => theme.colors.text};
        font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
        text-decoration: none;
        transition: color 0.3s ease;
        position: relative;

        &:after {
            content: "";
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: ${({ theme }) => theme.colors.primary};
            transition: width 0.3s ease;
        }

        &:hover {
            color: ${({ theme }) => theme.colors.primary};

            &:after {
                width: 100%;
            }
        }
    }
`;

const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;

    @media (max-width: 992px) {
        display: block;
    }

    span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px 0;
        background-color: ${({ theme }) => theme.colors.text};
        transition: all 0.3s ease;

        &:nth-child(1) {
            transform: ${({ $isOpen }) =>
                $isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"};
        }

        &:nth-child(2) {
            opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
        }

        &:nth-child(3) {
            transform: ${({ $isOpen }) =>
                $isOpen ? "rotate(-45deg) translate(7px, -7px)" : "none"};
        }
    }
`;

const MobileMenu = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: ${({ theme }) => theme.zIndices.modal};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MobileNavLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
`;

const MobileNavLink = styled.li`
    margin: 1.5rem 0;

    a {
        color: ${({ theme }) => theme.colors.text};
        font-size: 1.5rem;
        font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

const MobileMenuCloseButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
`;

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { title: "About Us", href: "#about" },
        { title: "Courses", href: "#courses" },
        { title: "Teachers", href: "#teachers" },
        { title: "Testimonials", href: "#testimonials" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <StyledHeader $scrolled={scrolled}>
            <HeaderContainer>
                <Logo>IT School</Logo>

                <Nav>
                    <NavLinks>
                        {navLinks.map((link, index) => (
                            <NavLink key={index}>
                                <a href={link.href}>{link.title}</a>
                            </NavLink>
                        ))}
                    </NavLinks>

                    <Button
                        variant={Button.Variants.PRIMARY}
                        size={Button.Sizes.SMALL}>
                        Enroll Now
                    </Button>
                </Nav>

                <MobileMenuButton $isOpen={isMenuOpen} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </MobileMenuButton>

                <AnimatePresence>
                    {isMenuOpen && (
                        <MobileMenu
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}>
                            <MobileMenuCloseButton onClick={closeMenu}>
                                ✕
                            </MobileMenuCloseButton>

                            <MobileNavLinks>
                                {navLinks.map((link, index) => (
                                    <MobileNavLink key={index}>
                                        <a href={link.href} onClick={closeMenu}>
                                            {link.title}
                                        </a>
                                    </MobileNavLink>
                                ))}
                            </MobileNavLinks>

                            <Button
                                variant={Button.Variants.PRIMARY}
                                size={Button.Sizes.MEDIUM}
                                style={{ marginTop: "2rem" }}>
                                Enroll Now
                            </Button>
                        </MobileMenu>
                    )}
                </AnimatePresence>
            </HeaderContainer>
        </StyledHeader>
    );
};

export default Header;
