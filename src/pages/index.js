import React, {useEffect, useState} from 'react'
import Task from '../components/task'
import axios from 'axios'
import Conference from '../components/conference'


const Home = () => {
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
            <h1 style={{color: "#7e43d7"}}>Home</h1>
        </div>

        <div style={{display: "flex", flex: 1}}>
            <div style={{flexDirection: 'column'}}>
            <h2 style={{fontWeight: 600}}>Conferences</h2>
            <div style={{display: 'flex'}}>
            <Conference 
            conferenceName={"London Conference"} 
            conferenceDate={"22 July 2022 - 23 July 2022"} 
            conferenceLocation={"London Hotel"} 
            role={"Program chair"}
            conferenceDescription={"Annual London conference, over 5000 participants last year, conference website: www.conference.com"}/>
                </div>
            </div>

            <div style={{flexDirection: 'column', paddingLeft: 60}}>
                <h2 style={{fontWeight: 600}}>Tasks</h2>
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

export default Home