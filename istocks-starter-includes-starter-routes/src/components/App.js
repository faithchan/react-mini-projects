import React from "react";
import stockData from "./stock-data";
import Header from "./Header"
import Main from "./Main"
import {Route,Link} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App


