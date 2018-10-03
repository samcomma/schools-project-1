import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


class Navbar extends Component {
  render(){
    return (
        <div id='navbar'>
        <Link to='/'><button className='btn-nav'>Home</button></Link>
        <Link to='/schools'><button className='btn-nav'>Schools</button></Link>
        <Link to='/students'><button className='btn-nav'>Students</button></Link>
        </div>
    )
  }
}

export default connect()(Navbar)
