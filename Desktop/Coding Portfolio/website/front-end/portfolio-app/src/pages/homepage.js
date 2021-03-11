//Styled Components 
import styled from 'styled-components';

//components
import NavBar from '../components/navbar/navbar';
import Sidebar from '../components/Sidebar/index';
import AboutMePreview from '../components/about';
import PortfolioPreview from '../components/portfolio';
import Footer from '../components/footer';

//hooks 
import { useState } from 'react';

//image
import Me from "../assets/me/me2.png";

//grain 
import Grain from "../assets/noise/noise.png";


const Background = styled.div`
   
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


const HomepageStyle = styled.div`
  font-family: Helvetica,Helvetica Neue,Arial,Sans-serif;
  background-color: #d4d4d4 ;
  width: 100%;
   heigth: 100%;
   display: flex; 
   flex-direction: column;
   align-items: center;
   color: white;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
`;

const StyledImage = styled.img`
  height: 100px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const StyledTitle = styled.h1` 
  margin-top: 80px;
`

export default function Homepage({Projects}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Background>
      <HomepageStyle>
        
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        
        <StyledTitle>Guilherme Caeiro - Web Development Portfolio</StyledTitle>
        <AboutMePreview/>
        <PortfolioPreview Projects={Projects} />
        <Footer />
        
      </HomepageStyle>
      </Background>
  );
}

