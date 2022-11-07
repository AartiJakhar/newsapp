import React, { Component} from 'react'
import Sidebar from './Sidebar'
import  '../App.css';
import { Link } from 'react-router-dom';
import menu from './menu-burger.png'



export default class Navbar extends Component {
  constructor(){
    super();
    this.state={loading:false}
  }
  Sidebarclick =()=>{
    if(this.state.loading ===false){
     this.setState({loading:true});
     console.log('sidebar btn is clicked ');

   }
   else{
    this.setState({loading:false});
    console.log('btn fir se clicked');
   }
  }
  render(props) {
   
    return (
      <div>
     
        <nav  className='navSize  fixed-top'>
         <div style={{display: 'flex',alignItems: 'center'}}>

            <Link to="/"   style={{color:'white',padding:' 0rem 1rem',textDecoration:'none',fontSize:'2rem',fontWeight:'bolder', border:'1px solid white',borderRadius:'1rem' ,   boxShadow: 'inset 1px 1px 4px white'}} >{this.props.title}</Link>
            <Link to='/entertainment' className='Anav'  >ENTERTAINMENT</Link>
            <Link to='/science'       className=' Anav'  >SCIENCE</Link>
            <Link to='/general'       className=' Anav'  >GENERAL</Link>
            <Link to='/'              className= 'Anav' >BUSINESS</Link>
            <Link to='/health'        className=' Anav'  >HEALTH</Link>
            <Link to='/technology'    className=' Anav'  >TECH</Link>
            <Link to='/sports'        className=' Anav'  >SPORTS</Link>

        
         </div>
           
          
          <div  className='menu'>
             <img src={menu} onClick={this.Sidebarclick}  style={{width:'2rem'}} alt="" />

          </div>
        
        </nav>

      
      { this.state.loading && <Sidebar/>}

      </div>
    )
  }
}





