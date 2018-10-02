import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getStudent, deleteStudent } from './store'
import StudentForm from './StudentForm'

class Student extends Component {

  render () {
    const { student, deleteStudent } = this.props
    return (
      <div id='single-story' className='column'>
        <h2>{ student.firstName } { student.lastName }</h2>
        <hr />
        <h3>Information</h3>
        <div>Attending: </div>
        <br />
        <div>GPA: { student.gpa }</div>
        <br />
        <button className="button" onClick={() => deleteStudent(student.id)}>
            Remove
        </button>
      </div>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
    return {
      students: state.students,
      student: getStudent(ownProps.id, state.students)
    }
  }

const mapDispatchToProps = dispatch => ({
    deleteStudent: id => dispatch(deleteStudent(id))
})

 
export default connect(mapStateToProps, mapDispatchToProps)(Student)