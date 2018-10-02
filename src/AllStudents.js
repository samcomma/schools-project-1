import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteStudent } from './store'

class AllStudents extends Component {
  
  render () {
    const { students, deleteStudent } = this.props
    return (
      <div id='stories' className='column'>
        <br />
        <ul>
            {
            students.map(student => (
                <li className='story' key={student.id}>
                    <Link to={`/students/${student.id}`}> 
                        <div>{student.firstName} {student.lastName} (attending: {student.school.name})</div>
                    </Link>
                    <button className="button" onClick={() => deleteStudent(student.id)}>
                        Remove
                    </button>
                </li>
            ))
            }
        </ul>
        <Link to='/students/create'>
          <button>Add Student</button>
        </Link>
      </div>
    )
  }
}


const mapStateToProps = ({ schools, students }) => ({
    schools,
    students
})


const mapDispatchToProps = dispatch => ({
    deleteSchool: id => dispatch(deleteStudent(id))
})

 
export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)