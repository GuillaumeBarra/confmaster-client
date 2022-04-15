import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import pages for navigation
import Home from './pages';
import Profile from './pages/profile';
import Conferences from './pages/conferences';
import Tasks from './pages/tasks';
import Signup from './pages/signup';
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      
        <div className="App">
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/conferences" element={<Conferences/>} />
              <Route path="/tasks" element={<Tasks/>} />
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
        </div>
      
    );
  }
}

export default App;