import * as React from 'react';
import { InputBase } from "@material-ui/core";
import styled from "styled-components";

const InputBaseWrapper = styled(InputBase)`
    border: 3px solid black;
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    height: 5vh;
    margin-top: 0.6vh;
    width: 20vw;
    
`

const Label = styled.div`
    margin-left: 15px;
    height: auto;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
    width: auto; 
    z-index:1;
    position: absolute;
`
const Wrapper = styled.div`
    flex:1;
    margin-bottom: 2vh;
    height: auto;
    justify-content: space-between;
    padding-left: 20px;
`
//Textbox for signup/login 
export default function TextFieldComponent(props) {

  return (
    <Wrapper>
        <Label>{props.label}</Label>
        <InputBaseWrapper
          sx={{ input: { color: 'white' } }} 
          value={props.value}
          onChange={(text) => props.onUpdate(text)}
        />
    </Wrapper>

  );
}