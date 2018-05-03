import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Jumbotron from './components/Jumbotron/Jumbotron';
import ProductList from './components/Item/ProductList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Jumbotron />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/products' component={ProductList} />

            </Switch>

          
            
          
        
        </div>
      </Router>
    );
  }
}

export default App;
