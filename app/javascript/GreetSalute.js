import React from "react";
import { useSelector } from "react-redux";

const GreetSalute =()=>{
    const messages = useSelector((store)=>store.message.value)
    return (
        <h1>{messages.greeting}</h1>
    )
}

export default GreetSalute