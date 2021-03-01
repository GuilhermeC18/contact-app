//React Router 
import { Link } from "react-router-dom";

//Styled Components 
import styled from 'styled-components';

const StyledLink = styled(Link)`
z-index: 10;
color: #fff;
display: flex;
align-items: center;
font-size: 0.9rem; 
text-decoration: none;
padding: 0 1rem; 
height: 100%; 
cursor: pointer; 
font-style: italic;
padding-bottom: 80px;
`; 

const StyledP = styled.p`
font-size: 1rem;
`;


export default function AboutMePreview() {
    return (
        <>
          
             <StyledP>I am a Full Stack Web Developer with a background in Filmmaking.
                   Currently based in Berlin, but available to work anywhere.</StyledP> 
             <StyledLink to="/about">
               Click to know more...
             </StyledLink>
          
        </>
    )
}