import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
// import ButtonAppBar from '@material-ui/core/SnackbarContent';
// import Appbar from "./components/Appbar/ButtonAppBar";
import Appbar from "./components/MenuItem/MenuItem";
import Input from "./components/Form/Input";
import Nav from "./components/Nav";
import Jumbotron from './components/Jumbotron/Jumbotron';
import Search from './pages/Search';
import Saved from './pages/Saved';

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Jumbotron/>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route exact path="/saved" component={Saved}/>

      </Switch>
    </div>
  </Router>
);

export default App;