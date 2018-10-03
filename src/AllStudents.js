import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteStudent } from './store'

class AllStudents extends Component {
  
  render () {
    const { students, schools, deleteStudent } = this.props
    return (
      <div id='students'>
        <h3>Students:</h3>
        <hr />
        <br />
        <ul>
            {
            students.map(student => {
                const studentsSchool = schools.find(school => school.id === student.schoolId)
                return (
                    <li className='story' key={student.id}>
                        <Link to={`/students/${student.id}`} style={{ textDecoration: 'none' }}> 
                            <div>{student.firstName} {student.lastName} ({studentsSchool ? studentsSchool.name : 'Not Enrolled'})</div>
                        </Link>
                        <button className="button" onClick={() => deleteStudent(student)}>
                            Remove
                        </button>
                    </li>
                )
            })
            }
        </ul>
        <Link to='/students/create'>
          <button>Add Student</button>
        </Link>
      </div>
    )
  }
}



const mapStateToProps = ({ students, schools }) => ({
  students,
  schools
})

const mapDispatchToProps = dispatch => ({
    deleteStudent: student => dispatch(deleteStudent(student))
})

 
export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)