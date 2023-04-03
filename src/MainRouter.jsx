import React from "react"
import { Route, Routes } from "react-router-dom"
import "./index.css"
import AddPoint from "./Pages/AddPoint"
import Home from "./Pages/Home"

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddPoint />} />
    </Routes>
  )
}

export default MainRouter
