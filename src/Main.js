import React, { Component } from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { getSchools, getStudents } from './store'

import Navbar from './Navbar'
import AllSchools from './AllSchools'
import School from './School'
import SchoolForm from './SchoolForm'
import AllStudents from './AllStudents'
import Student from './Student'
import StudentForm from './StudentForm'
import Footer from './Footer'


class Main extends Component {

    componentDidMount() {
        this.props.getSchools()
        this.props.getStudents()
    }

  render () {
    return (
      <Router>
        <div id='main'>
          <div className='column container'>
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/schools' component={AllSchools} />
            <Route exact path='/schools/:id' component={School} />
            <Route exact path="/students/create" component={SchoolForm} />
            <Route exact path='/students' component={AllStudents} />
            <Route exact path='/students/:id' component={Student} />
            <Route exact path="/students/create" component={StudentForm} />
          </Switch>
          <br />
          <div id='footer'>
            <Footer />
          </div>
        </div>
      </Router>
      
    )
  }
}



  
const mapDispatchToProps = (dispatch) => ({
    getSchools: () => dispatch(getSchools()),
    getStudents: () => dispatch(getStudents())
})
  
export default connect(null, mapDispatchToProps)(Main)
  
  