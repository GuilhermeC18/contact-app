//navbar Elements
import {Nav, NavLink, NavMenu, BarMenu, BarIcon} from './navbarElements';


//Hooks
import { useState } from 'react';

//Material-UI
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//React Router 
import { Link } from "react-router-dom";

//SideBar
import Sidebar from "../Sidebar/index";

const ITEM_HEIGHT = 50; 



const Navbar = ({ toggle }) => {
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);

    const handleClick = (event) => {
        setAnchor(event.currentTarget);
    };
    console.log(open);
    const handleClose = () => {
        setAnchor(null);
    }
    return (
        <>
        
          <Nav>
            <BarMenu>
               <BarIcon onClick={toggle} />
           </BarMenu>
           <NavMenu>
             <NavLink to="/">
                Homepage
             </NavLink>
             <NavLink to="/about">
                About
             </NavLink>
             <NavLink to="/projects">
                Projects
              </NavLink>
              <NavLink to="/contact">
                 Contact
              </NavLink>
            </NavMenu>    
          </Nav>    
        </>
    )
}

export default Navbar;