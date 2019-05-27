import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
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
