import React from "react";
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Nav, NavContainer, MobileIcons, NavItems, NavLink, ButtonContainer, GithubButton, LinkedInButton, LogoText, MobileMenu, MobileMenuLink } from './NavbarStyles'
import { useTheme } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavContainer>
                <LogoText>
                    Damma <span>Deshan</span>
                </LogoText>

                {/* Mobile menu toggle */}
                <MobileIcons>
                    <FaBars
                        onClick={() => setOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                    />
                </MobileIcons>

                {/* Desktop Navbar */}
                <NavItems>
                    <NavLink as={ScrollLink} to="about" smooth={true} duration={500}>
                        About
                    </NavLink>
                    <NavLink as={ScrollLink} to="skills" smooth={true} duration={500}>
                        Skills
                    </NavLink>
                    <NavLink as={ScrollLink} to="projects" smooth={true} duration={500}>
                        Projects
                    </NavLink>
                    <NavLink as={ScrollLink} to="education" smooth={true} duration={500}>
                        Education
                    </NavLink>
                </NavItems>

                {/* Desktop Buttons */}
                <ButtonContainer className="desktop-buttons">
                    <GithubButton
                        href={Bio.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github Profile
                    </GithubButton>
                    <LinkedInButton
                        href={Bio.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn Profile
                    </LinkedInButton>
                </ButtonContainer>
            </NavContainer>

            {/* Mobile Menu */}
            {open && (
                <MobileMenu open={open}>
                    <MobileMenuLink
                        as={ScrollLink}
                        to="about"
                        smooth={true}
                        duration={500}
                        onClick={() => setOpen(false)}
                    >
                        About
                    </MobileMenuLink>
                    <MobileMenuLink
                        as={ScrollLink}
                        to="skills"
                        smooth={true}
                        duration={500}
                        onClick={() => setOpen(false)}
                    >
                        Skills
                    </MobileMenuLink>
                    <MobileMenuLink
                        as={ScrollLink}
                        to="projects"
                        smooth={true}
                        duration={500}
                        onClick={() => setOpen(false)}
                    >
                        Projects
                    </MobileMenuLink>
                    <MobileMenuLink
                        as={ScrollLink}
                        to="education"
                        smooth={true}
                        duration={500}
                        onClick={() => setOpen(false)}
                    >
                        Education
                    </MobileMenuLink>

                    <GithubButton
                        href={Bio.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "10px 16px",
                            background: theme.primary,
                            color: "white",
                            width: "max-content",
                        }}
                    >
                        Github Profile
                    </GithubButton>
                    <LinkedInButton
                        href={Bio.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "10px 16px",
                            background: theme.primary,
                            color: "white",
                            width: "max-content",
                        }}
                    >
                        LinkedIn Profile
                    </LinkedInButton>
                </MobileMenu>
            )}
        </Nav>
    );
}

export default Navbar;