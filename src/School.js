import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteSchool, getSchools } from './store'


class School extends Component {


  render () {
    const { school, students, deleteSchool } = this.props
    const studentsAttending = students.filter(student => school.id === student.schoolId)
    if (!school) return null
    return (
      <div id='single-school' className='column'>
        <h2>{ school.name }</h2>
        <hr />
        <h3>Address:</h3>
        <div>{ school.address }</div>
        <br />
        <h3>Information:</h3>
        <div>{ school.description }</div>
        <br />
        <h3>Students:</h3>
            <div>
                <ul>
                    {
                    studentsAttending.map(student => (
                        <li key={student.id}>
                        <Link to={`/students/${student.id}`}>
                            {student.firstName} {student.lastName}
                        </Link>
                        </li>
                    ))
                    }
                  </ul>
            </div>
        <br />
        <Link to='/schools/create'>
          <button>Add School</button>
        </Link>
        <br />
        <button className="button" onClick={() => deleteSchool(school)}>
            Remove this School
        </button>
      </div>
    )
  }
}


  const mapStateToProps = ({ schools, students }, { match }) => {
    const school = schools.find(school => school.id === match.params.id * 1);
    return {
      school,
      students
    }
  }


const mapDispatchToProps = dispatch => ({
    deleteSchool: school => dispatch(deleteSchool(school))
})

 
export default connect(mapStateToProps, mapDispatchToProps)(School)