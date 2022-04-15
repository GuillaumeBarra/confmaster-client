/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState, useEffect} from 'react'
import defaultProfile from '../defaultProfile.jpeg'
import ProfileInfo from '../components/profileInfo'
import Task from '../components/task'
import { auth } from '../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import axios from 'axios'

const Profile = () => {

const [user, setUser] = useState({})

//check for authentication state changes
onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
})

//handle tasks
const [tasks, setTasks] = useState([])
const [loaded, setLoaded] = useState(false)

useEffect(() => {
  const fetchTasks = async() => {
    try {
      const tasks = await axios.get('https://europe-west1-confmaster-92a63.cloudfunctions.net/api/tasks')
        setTasks(tasks);
        console.log(tasks.data[0])
        setLoaded(true)
        console.log(loaded)
      
    } catch(error) {
      console.error(error.message);
    }
  }
  fetchTasks();
  
}, []);
var tasksData = tasks.data;


  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: '90vh', paddingLeft: 30, flexDirection:'column'}}>

        <div>
            <h1 style={{color: "#7e43d7"}}>Profile</h1>
        </div>

        <div style={{display: "flex", flex: 1}}>
            <div style={{flexDirection: 'column'}}>
                <img
                style={{height: '25vh',
                width: '25vh',
                borderRadius: '50%',
                border: '2px solid #7e43d7',
                marginLeft: 20, marginTop: 20}}
                 src={defaultProfile} alt="please upload a profile picture"/>

                 <ProfileInfo 
                 name={user?.email} 
                 university={"King's College London"}
                 conference={"London Conference"}
                 role={"General Chair"}
                 pastConference={"Other London Conference"}
                 pastRole={"Program Chair"}/>
            </div>

            <div style={{flexDirection: 'column', paddingLeft: 40, paddingTop: 20}}>
                <h2 style={{fontWeight: 600}}>Currently Completing:</h2>
                <div style={{display: 'flex'}}>
                {loaded ? (tasksData.map(task => (
                    <Task key={task.taskId} taskLabel={task.title} taskDescription={task.body} taskDeadline={task.deadline} usersAssigned={[task.userAssigned]}/>))
              ) : (<p>Loading Tasks...</p>)
              }
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Profile