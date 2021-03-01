//Hooks
import { useEffect } from 'react';

//React Router 
import { Link } from "react-router-dom";

//Custom Hooks 
import useProjectsByTech from '../../hooks/useTech';

//Style Components 
import styled from 'styled-components';

//Images 
import Filmmaker1 from "../../assets/filmmaker/filmmaker1.png";
import Filmmaker2 from "../../assets/filmmaker/filmmaker2.png";
import Filmmaker3 from "../../assets/filmmaker/filmmaker3.png";
import ArtScene1 from "../../assets/art-scene/art-scene1.png";
import ArtScene2 from "../../assets/art-scene/art-scene2.png";
import ArtScene3 from "../../assets/art-scene/art-scene3.png";
import ArtScene4 from "../../assets/art-scene/art-scene4.png";
import Brewery1 from "../../assets/brewery/brewery1.png";
import Brewery2 from "../../assets/brewery/brewery2.png";
import Brewery3 from "../../assets/brewery/brewery3.png";
import Brewery4 from "../../assets/brewery/brewery4.png";
import FilmChain1 from "../../assets/film-chain/filmchain1.png";
import FilmChain2 from "../../assets/film-chain/filmchain2.png";
import FilmChain3 from "../../assets/film-chain/filmchain3.png";
import FilmChain4 from "../../assets/film-chain/filmchain4.png";
import FilmChain5 from "../../assets/film-chain/filmchain5.png";

//Project Card 
import ImgMediaCard from './project-card';



const StyledLink = styled(Link)`
z-index: 10;
color: #fff;
display: flex;
align-items: center;
font-size: 1rem; 
text-decoration: none;
padding: 0 1rem; 
height: 100%; 
cursor: pointer; 
font-style: italic;
padding-bottom: 80px;
`; 


const Title = styled.h1`
 padding: 100px;
`

const ProjectGrid = styled.div`
  display: flex; 
  gap: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column; 
  }
`;

export default function PortfolioPreview({Projects}) {
    console.log(Projects);
    const { error, projectsByTech, onFindProjectByTech} = useProjectsByTech();
      

    const Projectsf = [{
       image: [Filmmaker2, Filmmaker1],
       name: "Filmmaker Portofolio Website",
       description: "A website to show my portofolio as a Filmmaker."
      },
      { image: [FilmChain1, FilmChain2],
        name: "Analytics Page FilmChain",
        description: "I helped design and developed a new Analytics page for FilmChain as part of my internship with them."
      }
  ]

    return (
        <>  
           <Title>Projects</Title>
           <ProjectGrid>
             <ImgMediaCard Project={Projectsf[0]} />
             <ImgMediaCard Project={Projectsf[1]} />
           </ProjectGrid>
            <StyledLink to="/projects">
               <p>Click to See All Projects...</p>
             </StyledLink>
        </>

    )
};