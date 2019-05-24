import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import './App.css';
import Home from "./components/home/home";
import Header from "./components/Header";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Route path='/' component={Home} />
          </div>
      </BrowserRouter>
  );
}

export default App;
