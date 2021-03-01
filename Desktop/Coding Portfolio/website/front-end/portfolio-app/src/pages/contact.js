//Styled Components 
import styled from 'styled-components';

//Components 
import NavBar from '../components/navbar/navbar';
import Sidebar from '../components/Sidebar/index';
import Footer from '../components/footer';

//Hooks 
import { useState } from 'react';
import { useForm } from 'react-hook-form';

//grain 
import Grain from "../assets/noise/noise.png";

import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';



//Image 
import ContactPic from "../assets/brutalism/Contact.jpg";

require('dotenv').config();


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
z-index: 10;
margin: 0px;
padding: 0px;
overflow-x: hidden; 
`;

const StyledImage = styled.img`
  height: 80vh;
  margin-left: 10%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledBody = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 180px;
  width: 100vw;
  
`;

const StyledForm = styled.form`
  z-index: 10;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
  gap: 40px;
  margin-right: 10%;
`;

const StyledName = styled.input`
  padding-top: 10px;
  margin-top: 5px;
  &:focus{
    outline: 0;
  }
`;


const StyledEmail = styled.input`
  padding-top: 10px;  
  margin-top: 5px;
  &:focus{
    outline: 0;
  }
`;

const StyledSubject = styled.input`
  padding-top: 10px;
  margin-top: 5px;
  width: 100%;
  &:focus{
    outline: 0;
  }
`;

const StyledMessage = styled.textarea`
  padding-top: 10px;
  margin-top: 5px;
  width: 100%;
  &:focus{
    outline: 0;
  }
`;

const NameWrapper = styled.div`
  grid-column-start: 1;
`;

const MessageWrapper = styled.div`
   grid-row-start: 3;
   grid-row-end: 4;
   grid-column-start:1;
   grid-column-end: 3;
`;


const SubjectWrapper = styled.div`
  grid-row-start: 2;
  grid-column-start:1;
  grid-column-end: 3;
`;

const ButtonWrapper = styled.div`
   grid-row-start: 4;
   grid-column-end: 2;
`;

const EmailWrapper = styled.div`
   grid-column-end: 3;
`;



const StyledLabel = styled.label`
   padding: 2px;
   display:block;
`;

const StyledButton = styled.input`
  display: flex;
  align-items: right;
  border: 1px solid black;
  color: grey;
  background-color: white;
  box-shadow: 0 1px #999;
  padding:4px;
  &:focus{
    outline: 0;
    
  }
  &:active{
    box-shadow: 0 1px #666;
  transform: translateY(1px);
  }
`;

const StyledTitle = styled.h1`
  margin-top: 80px;
  margin-bottom: 120px;
`;

export default function Contact() {
  const [isOpen, setIsOpen] =useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { register, errors, handleSubmit, reset } = useForm();
  
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  
  
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_qysgn48', 'template_s9usab9', e.target, 'user_fzrBmP7db8AUiBspGuDyO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  

  
    return(
      <>
        <Background>
          <StyledPage>  
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle} />
            <StyledTitle>Contact Me</StyledTitle>
            <StyledBody>
              <StyledImage src={ContactPic} alt="brutalist building" />
              <StyledForm className="contact-form" onSubmit={sendEmail}>
                <NameWrapper>
                  <StyledLabel>Name</StyledLabel>
                  <StyledName type="text" name="from_name" />
                </NameWrapper>
                <EmailWrapper>
                  <StyledLabel>Email </StyledLabel>
                  <StyledEmail type="email" name="email" />
                </EmailWrapper>
                <SubjectWrapper>
                  <StyledLabel>Subject</StyledLabel>
                  <StyledSubject type="text" name="subject" />
                </SubjectWrapper>
                <MessageWrapper>
                  <StyledLabel>Message</StyledLabel>
                  <StyledMessage name="message" />
                </MessageWrapper>
                <ButtonWrapper>
                  <StyledButton type="submit" value="Send" />
                </ButtonWrapper>
              </StyledForm>
              <ToastContainer />
            </StyledBody>
            <Footer />
         </StyledPage>
        </Background>
      </>
    )
}