import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  '../App.css';
export class Sidebar extends Component {
  render() {
    return (
      <div className='text-center' style={{marginTop:'4rem'}}>
    
    <nav style={{backgroundColor:'#102039 ',padding:'.0rem', alignItems:'center',display: 'flex',    justifyContent: 'space-between',
    boxShadow: '-2px 2px 8px white inset'}}>
          
            <Link to="/entertainment" className='sidebar' >ENTERTAINMENT</Link>
            <Link to="/science" className='sidebar' >SCIENCE </Link>
            <Link to="/technology" className='sidebar' >Tech </Link>
            <Link to="/general" className='sidebar' >GENERAL </Link>
            <Link to="/sports" className='sidebar' >SPORTS</Link>
            <Link to="/" className='sidebar' >BUSINESS</Link>
            <Link to="/health" className='sidebar' >HEALTH</Link>
  
        </nav>
      </div>
    )
  }
}

export default Sidebar
