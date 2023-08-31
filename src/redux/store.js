

import React from "react";
import myreducer from "./Reducer/myreducer";
import { createStore } from "redux";


let store = createStore(myreducer);

export default store;