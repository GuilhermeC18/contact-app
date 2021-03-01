//Icons 
import { ImGithub } from 'react-icons/im';
import { AiTwotoneMail } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';

//Styled Components 
import styled from 'styled-components';

//React Router 
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
  width: 80%;
  padding-top: 50px;
  padding-bottom: 100px;
  
`;

const IconWrapper = styled.a`
 z-index: 10;
 color: #fff;
 cursor: pointer;
 &:visited {
  color: #fff;
  
 }
 &:active {
  color: #fff;
 }
`;

const StyledIconGitHub = styled(ImGithub)`
   padding-right: 10px;
   &:visited {
    color: #fff;
   }
`;

const StyledIconLinkedin = styled(AiOutlineLinkedin)`
   padding-right: 10px;
   &:visited {
    color: #fff;
   }
`;

const StyledIconMail = styled(AiTwotoneMail)`
   padding-right: 10px;
   &:visited {
    color: #fff;
   }
`;

const StyledIconTwitter = styled(AiFillTwitterSquare)`
   padding-right: 10px;
   &:visited {
    color: #fff;
   }
`;

const StyledLink = styled(Link)`
  &:visited {
    color: #fff;
  }
`;

const StyledTitle = styled.p`
  margin-bottom: 50px;
  font-size: 20px;
`;

export default function Footer () {
    return (
      <>
        <StyledTitle>Keep in touch</StyledTitle>
        <StyledFooter>
          <IconWrapper href="https://github.com/GuilhermeC18" target="_blank" rel="noopener noreferrer">
            <StyledIconGitHub size={40}/>
          </IconWrapper>
          <IconWrapper href="https://www.linkedin.com/in/guilherme-caeiro-a820882b/" target="_blank" rel="noopener noreferrer">
            <StyledIconLinkedin size={40} />
          </IconWrapper>
          <IconWrapper >
            <StyledLink to="/contact">
              <StyledIconMail size={40} />
            </StyledLink>
          </IconWrapper>
          <IconWrapper  href="https://twitter.com/GuilhermeCaeir4" target="_blank" rel="noopener noreferrer">
            <StyledIconTwitter size={40} />
          </IconWrapper>
        </StyledFooter>
      </>
    )
}