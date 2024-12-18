import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.div`
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
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

export const MobileIcons = styled.div`
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

export const NavItems = styled.ul`
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
export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }


`;
export const ButtonContainer = styled.div`
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
export const GithubButton = styled.a`
    border: 1.3px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 30px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 10px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
     
    
`;
export const LinkedInButton = styled.a`
  border: 1.5px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 30px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 10px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};     
  }

  @media screen and (max-width: 768px) { 
    font-size: 14px;
  }
`;
export const LogoText = styled.span`
  font-size: 1.0rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary}; 
  display: inline-block;
  margin-left: 10px;

  
  &::before {
    content: "<";
    margin-right: 4px;
    color: ${({ theme }) => theme.secondary}; 
  }

  
  &::after {
    content: ">";
    margin: 0 4px;
    color: ${({ theme }) => theme.secondary}; 
  }

  span {
    color: ${({ theme }) => theme.primary}; 
  }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background-color: ${({ theme }) => theme.card_light + 90};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5 10px 0 rgba(0, 0, 0, 0.3);
    opacity: ${({ open }) => open ? '1' : '0'};
    z-index: ${({ open }) => open ? '1' : '-1'};


`;
export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;