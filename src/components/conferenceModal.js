import React, {useRef, useCallback, useEffect} from 'react';
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';
import TextBox from './modalTextbox.js';

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


export const ConferenceModal = ({showModal, setShowModal}) => {

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
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [participants, setParticipants] = React.useState('');

    const handleTitle = (event) => {
        setTitle(event.target.value);
      };
      const handleDescription = (event) => {
        setDescription(event.target.value);
      };
      const handleDate = (event) => {
        setDate(event.target.value);
      };
      const handleParticipants = (event) => {
        setParticipants(event.target.value);
      };

    return (
        <div>
            {showModal ? 
                <Background onClick={closeModal} ref={modalRef}>
                    <ModalWrapper>
                        <ModalContent>

                        <h2 style={{
                            color: '#7e43d7',
                            padding: 20
                        }}>Create Conference</h2>

                        <div style={{marginBottom: -10}}>
                            <TextBox label={"Title"} onUpdate={handleTitle}  value={title}/>
                        </div>

                        <div style={{marginBottom: -10}}>
                        <TextBox label={"Description"} onUpdate={handleDescription}  value={description}/>
                        </div>

                        <div style={{marginBottom: -10}}>
                        <TextBox label={"Date (dd/mm/yyyy)"} onUpdate={handleDate}  value={date}/>
                        </div>
                        
                        
                        
                        <div style={{display: 'flex'}}>
                        <TextBox label={"Add Participants"} onUpdate={handleParticipants}  value={participants}/>
                        <div style={{paddingLeft: '34vh', paddingTop: '15vh'}}>
                        
                        <button
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

export default ConferenceModal;