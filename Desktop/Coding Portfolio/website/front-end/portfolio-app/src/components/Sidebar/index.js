import React from 'react'

//elements 
import { SidebarContainer,
     Icon, 
     CloseIcon,
     SidebarWrapper,
     SidebarLink,
     SidebarMenu,
     SidebarStyle } from './sidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    
    return (
       
          <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
              <SidebarMenu >
                
                <SidebarLink onClick={toggle} to="/">Homepage</SidebarLink>
                <SidebarLink onClick={toggle} to="/about">About</SidebarLink>
                <SidebarLink onClick={toggle} to="/projects">Projects</SidebarLink>
                <SidebarLink onClick={toggle} to="/Contact">Contact</SidebarLink>
               
               </SidebarMenu>
            </SidebarWrapper>
         </SidebarContainer>
       
    )
}

export default Sidebar;
