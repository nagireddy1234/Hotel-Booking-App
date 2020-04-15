import React from "react";
import "./App.css";
<<<<<<< HEAD
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
=======
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
>>>>>>> changes added

function App() {
  return (
    <>
<<<<<<< HEAD
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Rooms" exact component={Rooms} />
          <Route path="/SingleRoom" exact component={SingleRoom} />
          <Route path="/Error" exact component={Error} />
        </Switch>

=======
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
>>>>>>> changes added
    </>
  );
}

export default App;
