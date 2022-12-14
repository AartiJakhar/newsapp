// import logo from './logo.svg';
import  './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
// import blogs from './components/blogs.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";



export class App extends Component {
  // apiKey = '8e4d75497bbc41068032110f923f027e'pm
  // apiKey =process.env.REACT_APP_NEWS_API
   state={
    progress:10
   }
   setProgress =(progress)=>{
    this.setState({progress: progress})
   }
  render() {
   
    return (
        <Router>
        <Navbar title="NEWS" />
        <LoadingBar color='#f11946' progress={this.state.progress} />
  <Routes>

        <Route exact path="/sports"         element={<News setProgress={this.setProgress}  key='sports' country='in' category='sports'/>} />
        <Route exact path="/"               element={<News setProgress={this.setProgress}  key='business' country='in' category='business'/>} />
        <Route exact path="/entertainment"  element={<News setProgress={this.setProgress}  key='entertainment' country='in' category='entertainment'/>} />
        <Route exact path="/general"        element={<News setProgress={this.setProgress}  key='general' country='in' category='general'/>} />
        <Route exact path="/science"        element={<News setProgress={this.setProgress}  key='science' country='in' category='science'/>} />
        <Route exact path="/technology"     element={<News setProgress={this.setProgress}  key='technology' country='in' category='technology'/>} />
        <Route exact path="/health"         element={<News setProgress={this.setProgress}  key='health' country='in' category='health'/>} />
  </Routes>
         



       
        {/* <News setProgress={this.setProgress} country='in' category="business" /> */}
      
        </Router>
    )
  }
}

export default App

