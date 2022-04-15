import React from 'react'
import defaultProfile from '../defaultProfile.jpeg'


export function profileInfo(props) {
  return (
    
    <div style={{marginLeft: 20}}>
        <div style={{fontSize: 20,fontWeight: 600, paddingTop: 20, paddingLeft: 20}}>{props.name}</div>
        <div style={{fontSize: 18, fontStyle: 'italic', paddingLeft: 20}}>{props.university}</div>
        <div style={{fontSize: 18, fontWeight: 600, paddingLeft: 20, paddingTop: 20}}>Current Conference:</div>
        <div style={{fontSize: 18, fontStyle: 'italic', paddingLeft: 20}}>{props.conference}, {props.role}</div>
        <div style={{fontSize: 18, fontWeight: 600, paddingLeft: 20, paddingTop: 20}}>Previous Conferences:</div>
        <div style={{fontSize: 18, fontStyle: 'italic', paddingLeft: 20}}>{props.pastConference}, {props.pastRole}</div>
    </div>
  )
}

export default profileInfo