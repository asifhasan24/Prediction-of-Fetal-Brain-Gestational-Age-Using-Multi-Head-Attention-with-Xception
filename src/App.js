import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import ImagePreview from './Components/ImagePreview/ImagePreview';
import NoMatch from './Components/NoMatch/NoMatch';
import TshirtTextDrag from './Components/TshirtTextDrag/TshirtTextDrag';



function App() {

  return (
  
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/imagepreview">
            <ImagePreview></ImagePreview>
          </Route>
          <Route path="/tshirt">
            <TshirtTextDrag></TshirtTextDrag>
          </Route>
          {/* <Route path="/login">
            <Login></Login>
          </Route> */}

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>

  
  );
}

export default App;
