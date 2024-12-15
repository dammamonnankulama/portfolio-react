import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;
const NavLogo = styled(LinkR)`
    
    width: 80px;
    padding: 0 6px;
    text-decoration: none;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    @media screen and (max-width: 640px) {
    padding: 0 0px;}

`;
const MobileIcons = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`;
const NavItems = styled.ul`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 30px;
   list-style: none;
   @media screen and (max-width: 768px) {
   display: none;
   }

`;
const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }


`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    padding: 0 6px;
    @media screen and (max-width: 640px) {
        display: none;
    }
`;
const GithubButton = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    border:1.6px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 22px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    :hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
     @media screen and (max-width: 640px) {
     font-size: 0.8rem;
    }
     
    
`;      




const Navbar = () => {
    return (
        <Nav>
            <NavContainer> 
                <NavLogo>Logo</NavLogo>
                <MobileIcons></MobileIcons>
                <NavItems>
                    <NavLink>Home</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GithubButton>GitHub Profile</GithubButton>
                </ButtonContainer>
               
            </NavContainer>

        </Nav>
    );
}

export default Navbar;