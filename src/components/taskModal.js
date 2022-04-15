import React, {useRef, useCallback, useEffect, useState} from 'react';
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';
import TextBox from './modalTextbox.js';
import axios from 'axios'

//modal styling from https://github.com/briancodex/react-modal-v1/blob/main/src/components/Modal.js

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #141414;
  
  
`;


export const TaskModal = ({showModal, setShowModal}) => {

    //Handle Modal
    const modalRef = useRef();
    //used to close modal on background click
    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      };

      //register keypress for 'esc'
      const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false);
            console.log('I pressed');
          }
        },
        [setShowModal, showModal]
      );
        //close modal when 'esc' is pressed
      useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );

    //Handle TextBoxes
    const [taskTitle, setTaskTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [taskDeadline, setTaskDeadline] = React.useState('');
    const [taskUsersAssigned, setTaskUsersAssigned] = React.useState('');

    const handleTitle = (event) => {
        setTaskTitle(event.target.value);
      };
      const handleDescription = (event) => {
        setDescription(event.target.value);
      };
      const handleDeadline = (event) => {
        setTaskDeadline(event.target.value);
      };
      const handleUsersAssigned = (event) => {
        setTaskUsersAssigned(event.target.value);
      };

      //post task function on "add" button click

      const [isLoaded, setIsLoaded] = useState(false)
      const postTask =  async () => {
        try {
          await axios.post('https://europe-west1-confmaster-92a63.cloudfunctions.net/api/task', {
            body: description,
            deadline: taskDeadline,
            title: taskDeadline,
            usersAssigned: taskUsersAssigned})
            
          setIsLoaded(true)
          console.log(isLoaded)
        } catch(error) {
          console.log(error.message)
        }
      }

    return (
        <div>
            {showModal ? 
                <Background onClick={closeModal} ref={modalRef}>
                    <ModalWrapper>
                        <ModalContent>

                        <h2 style={{
                            color: '#7e43d7',
                            padding: 20
                        }}>Add Task</h2>

                        <div style={{marginBottom: -10}}>
                            <TextBox label={"Title"} onUpdate={handleTitle}  value={taskTitle}/>
                        </div>

                        <div style={{marginBottom: -10}}>
                        <TextBox label={"Description"} onUpdate={handleDescription}  value={description}/>
                        </div>

                        <div style={{marginBottom: -10}}>
                        <TextBox label={"Deadline (dd/mm/yyyy)"} onUpdate={handleDeadline}  value={taskDeadline}/>
                        </div>
                        
                        
                        
                        <div style={{display: 'flex'}}>
                        <TextBox label={"Assign users"} onUpdate={handleUsersAssigned}  value={taskUsersAssigned}/>
                        <div style={{paddingLeft: '34vh', paddingTop: '15vh'}}>
                        
                        <button onClick={postTask}
                        style={{height: "4vh",
                                width: "10vh",
                                borderRadius: "15px",
                                fontSize: 18,
                                color: "white",
                                backgroundColor: "#7e43d7",
                                borderWidth:  0,
                                cursor: "pointer",
                                }}>Add</button>
                                
                        </div>
                        </div>
                        

                        </ModalContent>
                        
                        <CloseModalButton
                        aria-label='Close modal'
                        onClick={() => setShowModal(prev => !prev)}
                        />
                    </ModalWrapper>
                </Background>
            : null}
        </div>

    );

};

export default TaskModal;