import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import About from "./functionBased/components/pages/About"
import NotMatch from "./functionBased/components/pages/NotMatch"

//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<TodoContainer />}>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<NotMatch />}></Route>
      </Route>
    </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);