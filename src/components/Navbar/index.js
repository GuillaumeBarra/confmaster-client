import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import logo from '../../ConfMasterLogo.png'
import { auth } from '../../firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'




const Navbar = () => {
    const navigate = useNavigate();
    //handle navigation outside website when user logs out
    const navigateOnLogout = () => {
        navigate('/login')
    };
    //logout function
    const logout = async () => {
        await signOut(auth);
    }
  return (
    
        <Nav>
            <NavLink to="/">
                <img src={logo} height={70} width={100} alt="logo"/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/profile" activeStyle>
                profile
                </NavLink>
                <NavLink to="/tasks" activeStyle>
                tasks
                </NavLink>
                <NavLink to="/conferences" activeStyle>
                conference
                </NavLink>
            </NavMenu>
            <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 17,
                height: "3vh",
                width: "10vw",
                borderRadius: "10px",
                background: "#fff",
                padding: "3vh",
                color: "#7e43d7",
                border: "none",
                outline: "none",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
              }}onClick={() => {logout(); navigateOnLogout()}}>Log Out</button>
            
        </Nav>
    
  )
}

export default Navbar;