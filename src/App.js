import React from "react";
import "./App.css";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Rooms" exact component={Rooms} />
          <Route path="/SingleRoom" exact component={SingleRoom} />
          <Route path="/Error" exact component={Error} />
        </Switch>

    </>
  );
}

export default App;
