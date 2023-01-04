import React from "react";
import "./style.css";
// import {UserContext} from "./DataContext";
import Component from "./NameComponent";
import { useState } from "react/cjs/react.production.min";
import { createContext, useContext } from 'react';


export const UserContext = createContext(null);

function App() {
  const [name,setName] = useState("");
  const [location,setLocation] = useState("");

  return (
  <UserContext.Provider value={name}>
  <h1>{`Hello ${name}!`}</h1>
  <Component name={name} />
</UserContext.Provider>
)}

export default App;







