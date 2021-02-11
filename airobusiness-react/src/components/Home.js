import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export class Home extends Component {
  render() {
    return (
      <h1>  
          <Link className="" to={"/"}>Home</Link> 
          <Link className="nav-link" to={"/signin"}>Sign In</Link> 
          <Link className="nav-link" to={"/signup"}>Sign Up</Link>
    </h1>
    )
  }
}

export default Home;

