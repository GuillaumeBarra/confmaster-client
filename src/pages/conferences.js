import React, {useState} from 'react'
import Conference from '../components/conference'
import Button from '../components/button'
import ConferenceModal from '../components/conferenceModal'

const Conferences = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
    setShowModal(prev => !prev); //toggle modal on/off
    }
    return (
        <div style={{display: 'flex', flex:1,justifyContent: 'flex-start', alignItems: 'flex-start', height: '90vh', flexDirection:'column'}}>
    
        <ConferenceModal showModal={showModal} setShowModal={setShowModal}/>
          <div style={{display: 'flex',paddingLeft:30}}>
            <h1 style={{color: "#7e43d7", paddingRight: 20}}>Conferences</h1>
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
          
    
          <div style={{display:'flex', flex: 1, paddingLeft: 30}}>
            <Conference 
            conferenceName={"London Conference"} 
            conferenceDate={"22 July 2022 - 23 July 2022"} 
            conferenceLocation={"London Hotel"} 
            role={"Program chair"}
            conferenceDescription={"Annual London conference, over 5000 participants last year, conference website: www.conference.com"}/>
    
          </div>
          
    
        </div>
      )
}

export default Conferences