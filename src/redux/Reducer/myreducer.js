
import { NAMECHANGE, EMAILCHANGE } from "../Actions/actionTypes"

let initialValue = {name:"",email:""}
const myreducer = (state=initialValue,action)=>{
    switch(action.type){
        case NAMECHANGE:return {...state,name:action.payload}
        case EMAILCHANGE:return {...state,email:action.payload}
        default: return state;
    }
}

export default myreducer; 