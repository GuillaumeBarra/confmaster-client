import React from 'react'
import Box from '@material-ui/core/Box';
import styled from 'styled-components';


const BoxWrapper = styled(Box)`
    border: 2px solid black;
    border-radius: 15px;
    height: auto;
    width: 20vw;
`

export function TaskComponent(props) {
  return (
    <div style={{paddingRight: 20}}>
        <BoxWrapper>
        <Box sx={{color: "black",
            bgcolor: "#7e43d7",
            borderRadius: "12px",
            borderWidth:  2,
            padding: 10}}>
            <div style={{color: 'white'}}>{props.taskLabel}</div>
        </Box>
        <div style={{padding: 10}}>{props.taskDeadline}</div>
        <div style={{padding: 10}}>{props.taskDescription}</div>
        <div style={{padding: 10}}>{props.userAssigned}</div>
        </BoxWrapper>
        
    </div>
  )
}

export default TaskComponent