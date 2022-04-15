import React, {useState, useEffect} from 'react'
import Task from '../components/task'
import TaskModal from '../components/taskModal'
import axios from 'axios'

const Tasks = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev); //toggle modal on/off
  }

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
      
      <div style={{display: 'flex', flex:1,justifyContent: 'flex-start', alignItems: 'flex-start', height: '90vh', flexDirection:'column'}}>
        
        <TaskModal showModal={showModal} setShowModal={setShowModal}/>
        <div style={{display: 'flex', paddingLeft: 30}}>
          <h1 style={{color: "#7e43d7", paddingRight: 20}}>Tasks</h1>
          <div style={{display:'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          <button onClick={openModal}
          style={{height: "4vh",
          width: "4vh",
          borderRadius: "50%",
          fontSize: 22,
          color: "white",
          backgroundColor: "#7e43d7",
          borderWidth:  0,
          cursor: "pointer"}}>+</button>
          
          </div>

          
        
        </div>
      
        
        <div style={{display:'flex', flex: 1, paddingLeft: 30, minWidth: 992}}>
        {loaded ? (tasksData.map(task => (
              <Task key={task.taskId} taskLabel={task.title} taskDescription={task.body} taskDeadline={task.deadline} usersAssigned={[task.userAssigned]}/>))
        ) : (<p>Loading Tasks...</p>)
        }
        </div>
      

      </div>
    )
  
}

export default Tasks