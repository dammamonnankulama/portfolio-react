import React from "react";
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import {Nav,NavContainer,MobileIcons,NavItems,NavLink,ButtonContainer,GithubButton,LinkedInButton,LogoText,MobileMenu,MobileMenuLink} from './NavbarStyles'
import { useTheme } from 'styled-components';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavContainer>
                <LogoText>Damma <span>Deshan</span></LogoText>
                <MobileIcons>
                    <FaBars onClick={() => {
                        setOpen(!open)
                    }} />

                </MobileIcons>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                    <NavLink href='#education'>Education</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
                        Github Profile
                    </GithubButton>
                    
                    <LinkedInButton href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                    </LinkedInButton>
                </ButtonContainer>

            </NavContainer>
            {
                open && (
                    <MobileMenu open={open}>
                        <MobileMenuLink href="#about" onClick={() => {
                            setOpen(!open);
                        }}>About</MobileMenuLink>
                        <MobileMenuLink href='#skills' onClick={() => {
                            setOpen(!open);
                        }}>Skills</MobileMenuLink>
                        <MobileMenuLink href='#experience' onClick={() => {
                            setOpen(!open);
                        }}>Projects</MobileMenuLink>
                        <MobileMenuLink href='#education' onClick={() => {
                            setOpen(!open);
                        }}>Education</MobileMenuLink>
                        <GithubButton
                            style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }}
                            href="/"
                            target="_blank">
                            Github Profile
                        </GithubButton>
                    </MobileMenu>
                )
            }

        </Nav>
    );
}

export default Navbar;