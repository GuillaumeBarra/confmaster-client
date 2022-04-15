import React from 'react'
import Box from '@material-ui/core/Box';
import styled from 'styled-components';


const BoxWrapper = styled(Box)`
    border: 2px solid black;
    border-radius: 15px;
    height: auto;
    width: 20vw;
`

export function ConferenceComponent(props) {
  return (
    <div style={{paddingRight: 20}}>
        <BoxWrapper>
        <Box sx={{color: "black",
            bgcolor: "#7e43d7",
            borderRadius: "12px",
            borderWidth:  2,
            padding: 10}}>
            <div style={{color: 'white'}}>{props.conferenceName}</div>
        </Box>
        <div style={{padding: 10}}>{props.conferenceDate}</div>
        <div style={{padding: 10}}>{props.conferenceLocation}</div>
        <div style={{padding: 10}}>My Role: {props.role}</div>
        <div style={{padding: 10}}>{props.conferenceDescription}</div>
        </BoxWrapper>
        
    </div>
  )
}

export default ConferenceComponent