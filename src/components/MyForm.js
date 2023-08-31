

import React from "react";
import {useDispatch,useSelector } from "react-redux";
import { nameChange,emailChange } from "../redux/Actions/action";

const MyForm = ()=>{
    let dispatch = useDispatch();
    let data = useSelector(info=>info);
    // console.log(data);
    return (
        <>
        <h1>User Information</h1>
        <form action="">
            <label htmlFor="">Name:</label>
            <input type="text" onChange={(e)=>dispatch(nameChange(e.target.value))}/> <br />
            <label htmlFor="">Email:</label>
            <input type="email" name="" id="" onChange={(e)=>dispatch(emailChange(e.target.value))}/>
        </form>
        <div>Current values in store:</div>
        <p>Name - {data.name}</p>
        <p>Email - {data.email}</p>
        </>
    )
}

export default MyForm;