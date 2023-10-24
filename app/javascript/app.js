import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getMessage } from "../redux/messageSlice";
import GreetSalute from "./GreetSalute";


const App = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMessage())
    },[])

    return (
        <Routes>
            <Route path="/" element={<GreetSalute/>} />
        </Routes>
    )
}

export default App