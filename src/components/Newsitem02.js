import React, { Component } from 'react'

export class Newsitem02 extends Component {
  render() {
    
    let {title,description,newsUrl,imageUrl,publishedAt,author,source}=this.props;
  
    return (
        <div className="card my-3 mx-4" style={{width:'17rem',}}>
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
        <img src={imageUrl} style={{height:'12rem'}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title fs-5">{title}...</h5>
          <p className="card-text">{description}...</p>
   <p className="card-text"><small className='text-muted'> By { !author?'Unknown':author} on {new Date(publishedAt).toGMTString()} </small></p>

       
          <a  rel ='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}

export default Newsitem02
