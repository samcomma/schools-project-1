import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSchool } from './store'

class SchoolForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  

  handleSubmit(evt) {
    const { createSchool } = this.props
    evt.preventDefault()
    createSchool(this.state)
    this.setState = {
      name: '',
      address: '',
      description: ''
    }
  }

  render(){
    const { createSchool } = this.props
    return(
      <div>
        <h3>Create School:</h3>
        <hr />
        <br />
        <form id='createForm' >
            <label>Name:
                <input type='text' name='name' value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>Address:
                <input type='text' name='address' value={this.state.value} onChange={this.handleChange}/>
            </label>
            <label>Description:
                <input type='text' name='description' value={this.state.value} onChange={this.handleChange} />
            </label>
            <button value='create' onClick={() => createSchool(this.state)}>Create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createSchool: school => dispatch(createSchool(school))
})

export default connect(null, mapDispatchToProps)(SchoolForm)