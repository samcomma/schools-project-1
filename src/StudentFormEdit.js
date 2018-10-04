import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { updateStudent } from './store'

class StudentFormEdit extends Component {
  constructor(props) {
    super(props)
    const { student } = this.props
    this.state = {
        firstName: student ? student.firstname : '',
        lastName: student ? student.lastname : '',
        gpa: student ? student.gpa : 0,
        schoolId: student.schoolId ? student.schoolId : ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  

  handleSubmit(evt) {
    const { updateStudent } = this.props
    evt.preventDefault()
    updateStudent(this.state)
    this.setState = {
      firstName: '',
      lastName: '',
      gpa: '',
      schoolId: ''
    }
  }

  render() {
    const { schools } = this.props
    return (
      <div>
        <h3>Update Student:</h3>
        <hr />
        <br />
        <form id='createForm' onSubmit={this.handleSubmit}>
          <label>First Name:
            <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>Second Name:
            <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label>GPA:
            <input type='number' min='0' max='4' name='gpa' value={this.state.gpa} onChange={this.handleChange} />
          </label>
          <label>Attending:
          <select type='text' name='schoolId' value={this.state.schoolId} onChange={this.handleChange}>
            <option value=''>Choose School</option>
                {schools.map(school => {
                  return (
                    <option key={school.id} value={school.id}>
                      {school.name}
                    </option>
                  );
                })}
          </select>
          </label>
          <button value='create' onClick={() => updateStudent(this.state)}>Update</button>
        </form>
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
    updateStudent: student => dispatch(updateStudent(student))
  })

export default connect(mapStateToProps, mapDispatchToProps)(StudentFormEdit)
