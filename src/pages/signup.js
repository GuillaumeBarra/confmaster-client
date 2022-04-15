import React, {useState} from 'react'
import TextBox from '../components/signupTextbox.js';
import SvgComponent from '../components/circleSvg.js';
import {NavLink, NavBtnLink} from '../components/Navbar/NavbarElements'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {

  
  //define states (allows to read input data)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  //handlers for input
  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  //handle navigation on button click
  const navigate = useNavigate();

  //register user, catch error if registering fails
  const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user)
      } catch (error) {
        console.log(error.message);
      }
      
  };
  //navigate to website after user logs in
  const navigateOnSignin = () => {
    navigate('/profile');
  };

  return (
    
    <div style={{display: "flex", flexDirection:'column',backgroundColor: '#7e43d7', height: '92vh', width: "100%"}}>
        <div style={{paddingLeft: 30,paddingTop: 30, color: 'white'}}>
            <h2>Sign-Up to start or join a new Conference!</h2>
        </div>

        
        
        <div style={{display: "flex", flex:1,flexDirection:'row', paddingLeft: 80, paddingTop: 20, height: 'auto'}}>
            <div style={{flex:1,flexDirection:'column' ,justifyContent: 'right', color: "white", width:"80%"}}>
                <TextBox label={"Full Name"} onUpdate={handleFullName}  value={fullName} />
                <TextBox label={"Email"} onUpdate={handleEmail}  value={email} />
                <TextBox label={"Password"} onUpdate={handlePassword}  value={password} />
                <TextBox label={"Confirm Password"} onUpdate={handleConfirmPassword}  value={confirmPassword} />
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
                }}onClick={() => {register(); navigateOnSignin()}}>Sign Up</button>
            </div>
            <div style={{flex:1, display: "flex",flexDirection:'column',justifyContent: 'flex-start',alignItems:'flex-end', paddingLeft: 600}}>
                <SvgComponent fill="white" opacity={0.3} zIndex={0}/>
            </div>
            <div style={{flex:1, display: "flex",flexDirection:'column',justifyContent: 'flex-start',alignItems:'flex-end', marginLeft: -140, paddingTop: 80}}>
                <SvgComponent fill="white" opacity={0.3} zIndex={0}/>
            </div>
        </div>
        <div style={{paddingLeft: 30, color: 'white', display: "flex",}}>
            <p>Already Signed up?</p>
            <NavLink to="/login" style={{marginLeft: -8, marginTop: -99.5, fontSize: 17, textDecoration: "underline"}}>Login</NavLink>
            <div style={{flex:1, display: "flex",flexDirection:'column',justifyContent: 'flex-start',alignItems:'center', marginTop: -100}}>
                <SvgComponent fill="white" opacity={0.3} zIndex={0}/>
            </div>
        </div>
    </div>
    
  )
}

export default Signup