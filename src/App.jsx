import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./page/home";
import NewTask from "./page/newTask";
import ListTasks from "./page/listTasks";
import EditTask from "./page/editTask";
import Redirecting from "./page/redirecting";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<ListTasks />} />
        <Route path="/task/new" element={<NewTask />} />
        <Route path="/task/:id" element={<EditTask />} />
        <Route path="/redirecting" element={<Redirecting />} /> 
      </Routes> 
    </BrowserRouter>
  )
}

export default App