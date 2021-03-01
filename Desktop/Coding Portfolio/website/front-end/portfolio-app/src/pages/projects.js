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

//Project page
import ImgMediaCard from "../components/project-page";

//Images 
import Filmmaker1 from "../assets/filmmaker/filmmaker1.png";
import Filmmaker2 from "../assets/filmmaker/filmmaker2.png";
import Filmmaker3 from "../assets/filmmaker/filmmaker3.png";
import ArtScene1 from "../assets/art-scene/art-scene1.png";
import ArtScene2 from "../assets/art-scene/art-scene2.png";
import ArtScene3 from "../assets/art-scene/art-scene3.png";
import ArtScene4 from "../assets/art-scene/art-scene4.png";
import Brewery1 from "../assets/brewery/brewery1.png";
import Brewery2 from "../assets/brewery/brewery2.png";
import Brewery3 from "../assets/brewery/brewery3.png";
import Brewery4 from "../assets/brewery/brewery4.png";
import FilmChain1 from "../assets/film-chain/filmchain1.png";
import FilmChain2 from "../assets/film-chain/filmchain2.png";
import FilmChain3 from "../assets/film-chain/filmchain3.png";
import FilmChain4 from "../assets/film-chain/filmchain4.png";
import FilmChain5 from "../assets/film-chain/filmchain5.png";
import ServicePlan from "../assets/service-plan/serviceplan1.png";

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

const ProjectGrid = styled.div`
margin: 10px;
margin-bottom: 180px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 20px 20px;
grid-template-areas:
  ". . ."
  ". . .";
  @media screen and (max-width: 768px) {
    display:flex;
    flex-direction: column; 
  }
  
`;

const StyledTitle = styled.h1`
  margin-top: 80px;
  margin-bottom: 120px;
`;

export default function ProjectsPage() {
  const [isOpen, setIsOpen] =useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  const Projectsf = [{
    image: [Filmmaker2, Filmmaker1],
    name: "Filmmaker Portofolio Website",
    description: "A website to show my portofolio as a Filmmaker.",
    github: "https://github.com/GuilhermeC18/filmmaker"
   },
   { image: [FilmChain1, FilmChain2],
     name: "Analytics Page FilmChain",
     description: "I helped design and developed a new Analytics page for FilmChain as part of my internship with them.",
     github: "https://github.com/GuilhermeC18/FinalProject_FilmChain_FrontEnd"
   },
    {
      image: [ArtScene1, ArtScene2],
      name: "Art Scene",
      description: "Application that helps the user find art exhibitions near him in Berlin. Filtered by genre, time available and price.",
      github: "https://github.com/GuilhermeC18/filmmaker"
    },
    {
      image: [Brewery1, Brewery2],
      name: "Hidden Brewery",
      description: "Designed and coded during a 2-day hackathon together with 3 other coders, this application is for people to find hidden breweries during prohibition.",
      github: "https://github.com/GuilhermeC18/filmmaker"
    },
    {
      image: [ServicePlan],
      name: "Service Plan Talent Finder",
      description: "Designed, back-end and front-end coded during a 3 day hackathon together with 2 other coders",
      github: "https://github.com/annikadavis/serviceplan-employee-finder"
    },
]

    return(
      <>
        <Background>
          <StyledPage>
        
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <NavBar toggle={toggle} />
          <StyledTitle>My Projects</StyledTitle>
          <ProjectGrid>
            <ImgMediaCard Project={Projectsf[0]}/>
            <ImgMediaCard Project={Projectsf[1]}/>
            <ImgMediaCard Project={Projectsf[2]}/>
            <ImgMediaCard Project={Projectsf[3]}/>
            <ImgMediaCard Project={Projectsf[4]}/>
          </ProjectGrid>
          <Footer />
        </StyledPage>
        </Background>
      </>
    )
}