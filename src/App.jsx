import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './global/globalStyle.css';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
   <>
   <Router>
    <Navbar />
     <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/reports' component={Reports} />
        <Route path='/products' component={Products} />
      </Switch>
   </Router>      
   </>
  );
}

export default App;
