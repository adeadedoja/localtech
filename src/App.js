import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewTicket from "./components/Ticket/NewTicket";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/contact' component={Contact} />
                  <Route exact path='/about' component={About} />
                  <Route path='/ticket/new' component={NewTicket} />
              </Switch>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
