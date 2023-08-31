
import React from "react";
import './../styles/App.css';
import MyForm from "./MyForm";
import {Provider} from 'react-redux'
import store from "../redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <MyForm/>
      </Provider>
    </div>
  )
}

export default App
