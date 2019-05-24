import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Home from "./components/home/home";
import Header from "./components/Header";
import NewTicket from "./components/Ticket/NewTicket";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/ticket/new' component={NewTicket} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
