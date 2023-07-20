import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./page/home";
import NewTask from "./page/newTask";
import ListTasks from "./page/listTasks";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<ListTasks />} />
        <Route path="/task/new" element={<NewTask />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App