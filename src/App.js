import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import '../src/index.css';
import HomeScreen from './screens/HomeScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';

function App() {
  return (
    <Router>
      <Route path='/admin' component={AdminLoginScreen} exact />
      <Route path='/' component={HomeScreen} exact />
    </Router>
  );
}

export default App;
