import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/test/Home"
// import { Text, Image, Library } from "/.pages"
// import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/text" component={Text} />
        <Route exact path="/image" component={Image} />
        <Route exact path="/library" component={Library} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;