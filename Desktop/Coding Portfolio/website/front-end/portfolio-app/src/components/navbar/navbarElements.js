import styled from 'styled-components';
import  { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    width: 100%;
    height: 80px; 
    display: flex;
    justify-content: space-around; 
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.5rem; 
  text-decoration: none;
  padding: 0 1rem; 
  height: 100%; 
  cursor: pointer; 
  
`
export const BarMenu = styled.div`
  display: none; 
  @media screen and (max-width: 768px) {
      display: block;
      position: absolute; 
      top: 0; 
      right: 0; 
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer; 
  }
`;

export const NavMenu = styled.div`
 display: flex; 
 width: 100%;
 align-items: center;
 justify-content: space-around; 
 margin-right: --24px;

 @media screen and (max-width: 768px) {
     display: none;
   }
`;


export const BarIcon = styled(FaBars)`
  color: white;
`;