import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import About from "./pages/about";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        
      </Switch>
    </Router>
  );
}
export default App;