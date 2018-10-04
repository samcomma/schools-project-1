import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStudent } from './store'

class StudentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      gpa: '',
      schoolId: ''
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
    const { createStudent } = this.props
    evt.preventDefault()
    createStudent(this.state)
    this.setState = {
      firstName: '',
      lastName: '',
      gpa: '',
      schoolId: ''
    }
  }

  render() {
    const { schools, createStudent } = this.props
    return (
      <div>
        <h3>Create Student:</h3>
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
          <button value='create' onClick={() => createStudent(this.state)}>Create</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = ({ students, schools }) => ({
    students,
    schools
  })

  const mapDispatchToProps = dispatch => ({
    createStudent: student => dispatch(createStudent(student))
  })

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)