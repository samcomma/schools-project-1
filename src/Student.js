import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getStudents, deleteStudent } from './store'
//import StudentForm from './StudentForm'

class Student extends Component {

  render () {
    const { student, schools, deleteStudent } = this.props
    const studentsSchool = schools.find(school => school.id === student.schoolId)
    if (!student) return null
    return (
      <div id='single-story' className='column'>
        <h2>{ student.firstName } { student.lastName }</h2>
        <hr />
        <h3>Information</h3>
        <div>Attending: {studentsSchool ? studentsSchool.name : 'Not Enrolled'}</div>
        <br />
        <div>GPA: { student.gpa }</div>
        <br />
        <Link to='/students/create'>
          <button>Add Student</button>
        </Link>
        <br />
        <button className="button" onClick={() => deleteStudent(student)}>
            Remove
        </button>
      </div>
    )
  }
}



const mapStateToProps = ({ schools, students }, { match }) => {
  const student = students.find(student => student.id === match.params.id * 1);
  return {
    student,
    schools
  }
}

const mapDispatchToProps = dispatch => ({
    deleteStudent: student => dispatch(deleteStudent(student))
})

 
export default connect(mapStateToProps, mapDispatchToProps)(Student)