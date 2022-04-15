import React, { useState } from 'react'
import TextBox from '../components/signupTextbox.js';
import SvgComponent from '../components/circleSvg.js';

import {NavLink, NavBtnLink} from '../components/Navbar/NavbarElements'

import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //define states for input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    //handle states
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };

    const navigate = useNavigate();
    //navigate to website after user log in
    const navigateOnLogin = () => {
      navigate('/profile')
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user)
          } catch (error) {
            console.log(error.message);
          }
    };
  
    return (
      <div style={{display: "flex", flexDirection:'column',backgroundColor: '#7e43d7', height: '90vh', width: "100%"}}>
          <div style={{paddingLeft: 30,paddingTop: 30, color: 'white'}}>
              <h2>Sign-Up to start or join a new Conference!</h2>
          </div>
  
          <div style={{display: "flex", flex:1,flexDirection:'row', paddingLeft: 80, paddingTop: 20, height: 'auto'}}>
              <div style={{flex:1,flexDirection:'column' ,justifyContent: 'right', color: "white", width:"80%"}}>
                  <TextBox label={"Email"} onUpdate={handleEmail}  value={email}/>
                  <TextBox label={"Password"} onUpdate={handlePassword}  value={password}/>
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
                }}onClick={() => {login(); navigateOnLogin()}}>Log In</button>
                  <div style={{paddingLeft: 5, paddingTop: 20, color: 'white', display: "flex"}}>
                    <p>Already Signed up?</p>
                    <NavLink to="/signup" style={{marginLeft: -8, marginTop: 15, fontSize: 17, textDecoration: "underline"}}>Sign Up</NavLink>
                  </div>
              </div>
              <div style={{flex:1, display: "flex",flexDirection:'column',justifyContent: 'flex-start',alignItems:'flex-end', paddingLeft: 600}}>
                  <SvgComponent fill="white" opacity={0.3} zIndex={0}/>
              </div>
              <div style={{flex:1, display: "flex",flexDirection:'column',justifyContent: 'flex-start',alignItems:'flex-end', marginLeft: -140, paddingTop: 80}}>
                  <SvgComponent fill="white" opacity={0.3} zIndex={0}/>
              </div>
          </div>
          <div style={{paddingLeft: 30, color: 'white', display: "flex",}}>
              
              <div style={{flex:1, display: "flex",flexDirection:'column',justifyContent: 'flex-start',alignItems:'center', marginTop: -100}}>
                  <SvgComponent fill="white" opacity={0.3} zIndex={0}/>
              </div>
          </div>
  
      </div>
  )
}

export default Login