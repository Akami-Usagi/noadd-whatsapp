import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #363636;
    color: white;
    
`
const ContentDiv = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px){
        position: relative;
        bottom: 120px;
    }
`
const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`
const MainImg = styled.img`
    width: 250px;
    
`
const MainInput = styled.input`
    width: 230px;
    height: 40px;
    border: none;
    border-radius: 15px;
    border: solid 4px #00A859;
    margin-bottom: 20px;
    background-color: transparent;
    text-align: center;
    color: white;
    font-size: x-large;
    &::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    &::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }   
    &:focus{
        outline: none;
    }
`
const MainButton = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 15px;
    background-color: #00A859;
    color: white;
    font-size: large;
    font-weight: bold;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.7);
    transition: 400ms ease-in-out;
    &:hover{
        background-color: white;
        color: #00A859;
        translate: 0 5px;
    }
`

export default function Main(){

    const [number, setNumber] = useState("")
    const handleKeyPress = (event) => {
        if(event.key === "Enter"){
            window.open(`https://api.whatsapp.com/send?phone=57${number}`, "_blank");
        }
    }
    useEffect(()=>{
        document.body.style.overflow = "hidden"
        
    })

    return(
        <MainDiv>
            <ContentDiv>
                <MainImg src="/img/noadd_logo.svg" alt="Logo" />
                <h1>No Add Whatsapp</h1>
                <InputDiv>
                    <MainInput type="number" autoFocus onChange={(event => {
                        setNumber(event.target.value)
                        console.log(number);
                    })} onKeyDown={handleKeyPress}/>
                    <a href={`https://api.whatsapp.com/send?phone=57${number}`} target="blank"><MainButton>Enviar Mensaje</MainButton></a>
                </InputDiv>
            </ContentDiv>
        </MainDiv>
    )
}