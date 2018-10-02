import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSchool, deleteSchool } from './store'


export default class School extends Component {


  render () {
    const { school, deleteSchool } = this.props
    return (
      <div id='single-story' className='column'>
        <h2>{ school.name }</h2>
        <hr />
        <h3>Address:</h3>
        <div>{ school.address }</div>
        <br />
        <h3>Information:</h3>
        <div>{ school.description }</div>
        <br />
        <h3>Students:</h3>
            {/*<SchoolsStudentList id={school.id}/>*/}
            <div>
                <ul>
                    {
                    school.students.map(student => (
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
        <button className="button" onClick={() => deleteSchool(school.id)}>
            Remove
        </button>
      </div>
    )
  }
}


// CAN BE CLEANED UP:
const mapStateToProps = (state, ownProps) => {
    // console.log('STATE IN MAPSTATE: ', state)
    // console.log('OWNPROPS IN MAPSTATE: ', ownProps.id)
    // console.log('GET SCHOOL: ', getSchool(ownProps.id, state.schools))
    return {
      schools: state.schools,
      school: getSchool(ownProps.id, state.schools)
    }
  }


const mapDispatchToProps = dispatch => ({
    deleteSchool: id => dispatch(deleteSchool(id))
})

 
export default connect(mapStateToProps, mapDispatchToProps)(School)