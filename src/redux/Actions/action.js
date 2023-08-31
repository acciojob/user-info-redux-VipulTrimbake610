
import React from "react"
import { NAMECHANGE,EMAILCHANGE } from "./actionTypes"


export const nameChange = (data)=>{
    return {
        type:NAMECHANGE,
        payload:data
    }
}


export const emailChange = (data)=>{
    return {
        type:EMAILCHANGE,
        payload:data
    }
}