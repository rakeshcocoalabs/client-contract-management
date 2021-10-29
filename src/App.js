import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
//import Home1 from "./pages/home1";
import About from "./pages/about";
import Client from "./pages/add-client";
import Login from "./pages/login";
import Project from "./pages/add-contract";
import invoice from "./pages/add-invoice";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/add-client" component={Client} />
        <Route  path="/add-project" component={Project} />
        <Route  path="/add-invoice" component={invoice} />
        
        
      </Switch>
    </Router>
  );
}
export default App;