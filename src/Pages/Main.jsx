import React from "react";
import { useState } from "react";

export default function Main(){

    const [number, setNumber] = useState("")

    return(
        <div>
            <h1>No Add Whatsapp</h1>
            <input type="number" onChange={(event => {
                setNumber(event.target.value)
                console.log(number);
            })}/>
            <a href={`https://api.whatsapp.com/send?phone=57${number}`} target="blank"><button>enviar mensaje</button></a>
        </div>
    )
}