import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Procedures from "./Procedures";
import { Route, Link, Switch, Redirect, } from "react-router-dom";

const App = () => {
    return (
        <div>
          <nav>
            <Link to="/">Go to Home Page</Link>
            <Link to="/procedures">See Our Procedures</Link>
            <Link to="/contact">Contact Us!</Link>
          </nav>
          <main>
            <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/procedures'><Procedures /></Route>
            <Route path='/contact'><Contact /></Route>
            <Redirect to='/'/>
            </Switch>
          </main>
        </div>
    );
}

export default App;
