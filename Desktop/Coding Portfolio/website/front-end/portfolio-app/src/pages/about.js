//Styled Components 
import styled from 'styled-components';

//Components 
import NavBar from '../components/navbar/navbar';
import Sidebar from '../components/Sidebar/index';
import Footer from '../components/footer';

//Hooks 
import { useState } from 'react';

//grain 
import Grain from "../assets/noise/noise.png";

import AboutImg from "../assets/brutalism/About.jpg";

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


const StyledPage = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
background-color: #d4d4d4 ;
color: white;
width: 100%;
heigth: 100%;
margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
`;

const StyledTitle = styled.h1`
  margin-top: 80px;
  margin-bottom: 120px;
`;

const StyledBody = styled.div`
  margin-bottom: 180px;
  display: flex; 
  justify-content: center;
  width: 100%;
`;

const StyledImage = styled.img`

  height: 40vh;
  margin-left: 10%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TextBlock = styled.div`
 padding-left: 60px;
 padding-right: 20px;
 margin-right: 80px;
 margin-left: 80px;
`;

const ImageBlock = styled.div`
  margin-left: 80px;
`;

const StyledText = styled.p`
   line-height: 1.6;
`;

const StyledLabel = styled.label`
  font-style: italic;
  font-size: 13px;
  padding-top: 5px;
  padding-left: 10px;
`;

export default function AboutMe() {
  const [isOpen, setIsOpen] =useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return(
      <>
        <Background>
          <StyledPage>
          
              <Sidebar isOpen={isOpen} toggle={toggle}/>
              <NavBar toggle={toggle} />
              <StyledTitle>About me</StyledTitle>
              <StyledBody>
                <ImageBlock>
                  <StyledImage src={AboutImg} alt="Brutalist Building" />
                  <StyledLabel>(other of my two passions are photography and brutalist architechture)</StyledLabel>
                </ImageBlock>
                <TextBlock>
                  <StyledText>I am a Full Stack Web Developer with a background in Filmmaking.
                   Currently based in Berlin, but available to work anywhere.
                   Since a very young age I was very passionate about Cinema and Technology.
                   I have professional experience ranging from different positions at Tech Startups to 
                   numerous projects in the Filmmaking/Cinema field. 
                   I am familiar with frontend technologies such as CSS3(also Bootstrap and Material-UI), Javascript ES6+, React and Redux 
                   as well as backend such as Node.js, Express, Databases(SQL, MySQL), REST API and JWT. 
                   I also have experience working with Git/Github and following agile methodologies(Scrum, Sprint Planning, User Stories). 
                   Additionally I bring an experience accross different industries, skills in visual communication, a talent for UX/UI(and
                   knowledge on how to use Figma) as well as experience with softwares such as Photoshop, Premiere and Resolve. 
                   I have a very curious mind and I am constantly learning new things. Right now my biggest interest are in the fields of Machine Learning(
                   I am looking into Python and TensorFlow) and Blockchain Development(learning Solidity). 
                   If you think we can collaborate, drop me a line or follow me on social media.
                   </StyledText>
                 </TextBlock>  
              </StyledBody>
            <Footer />
          </StyledPage>
        </Background>
      </>
    )
}