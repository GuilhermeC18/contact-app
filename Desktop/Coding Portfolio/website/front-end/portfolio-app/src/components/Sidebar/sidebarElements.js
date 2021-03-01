import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import  { NavLink as Link } from 'react-router-dom';


//grain 
import Grain from "../../assets/noise/noise.png";

export const SidebarStyle = styled.div`

@keyframes grain {
    0%, 100% { transform:translate(0, 0) }
    10% { transform:translate(-5%, -10%) }
    20% { transform:translate(-15%, 5%) }
    30% { transform:translate(7%, -25%) }
    40% { transform:translate(-5%, 25%) }
    50% { transform:translate(-15%, 10%) }
    60% { transform:translate(15%, 0%) }
    70% { transform:translate(0%, 15%) }
    80% { transform:translate(3%, 35%) }
    90% { transform:translate(-10%, 10%) }
  }
   &:after {
     content:"";
     background-image: url(${Grain});
     height: 300%;
     width: 300%;
     opacity: 0.3;
     position: fixed;
     top: -100%;
     left: -50%;
     animation: grain 8s steps(10) infinite;
   }
`

export const SidebarContainer = styled.aside`
  position: fixed; 
  z-index: ${({ isOpen}) => (isOpen ? '998' : '0')};
  width: 100%;
  heigth: 100%; 
  background-color: #d4d4d4;
  display: grid; 
  align-items: center; 
  left: 0;
  transition: 0.3s ease-in-out; 
  opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
 
  @keyframes grain {
    0%, 100% { transform:translate(0, 0) }
    10% { transform:translate(-5%, -10%) }
    20% { transform:translate(-15%, 5%) }
    30% { transform:translate(7%, -25%) }
    40% { transform:translate(-5%, 25%) }
    50% { transform:translate(-15%, 10%) }
    60% { transform:translate(15%, 0%) }
    70% { transform:translate(0%, 15%) }
    80% { transform:translate(3%, 35%) }
    90% { transform:translate(-10%, 10%) }
  }
   &:after {
     content:"";
     background-image: url(${Grain});
     height: 300%;
     width: 300%;
     opacity: 0.3;
     position: fixed;
     top: -100%;
     left: -50%;
     animation: grain 8s steps(10) infinite;
   }
`;

  export const CloseIcon = styled(FaTimes)`
    color: #fff; 
  ` 

  export const Icon = styled.div`
    position: absolute; 
    top: 1.2rem; 
    right: 1.5rem; 
    background: transparent; 
    font-size: 2rem; 
    cursor: pointer; 
    outline: none; 
  `

  export const SidebarWrapper = styled.div`
    color: #fff;
  `;

  export const SidebarLink = styled(Link)`
    z-index: 999;
    display: flex;
    align-items: center; 
    justify-content: center; 
    font-size: 1.5rem; 
    text-decoration: none;
    list-style: none; 
    transition: 0.2 ease-in-out;
    text-decoration: none;
    cursor: pointer; 
    &:visited {
         color: #fff;
        }
    &:hover {
        color: #fff;
        transition: 0.2s ease-in-out; 
    }

  `;

export const SidebarMenu = styled.ul`
  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 20vh);
  text-align: center;
  
  @media screen and (max-width: 480px){
      grid-template-rows: repeat(4, 15vh);
  }
`;