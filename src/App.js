import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/screens/home';
import Profile from './components/screens/profile';
import Login from './components/screens/login';
import Signup from './components/screens/signup';
import Createpost from './components/screens/createpost';


function App() {
  return (
    <BrowserRouter>
     <Navbar />
    <Route exact path="/" >
      <Home />
    </Route>
    <Route path="/profile" >
      <Profile />
    </Route>
    <Route path="/login" >
      <Login />
    </Route>
    <Route path="/signup" >
      <Signup />
    </Route>
    <Route path="/createpost" >
      <Createpost />
    </Route>
    
    
    </BrowserRouter>
    
  );
}

export default App;
