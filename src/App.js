import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import store from './store';
import {Provider} from 'react-redux';
function App() {
  return (
     <Provider store={store}>
      <Router> 
     <div className="app">
      <Route exact path="/" component={Register}/>
      <Route exact path="/login" component={Login}/>
      </div>
      </Router>
     </Provider>
  );
}

export default App;
