import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { createSchool } from './store'

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
    //evt.preventDefault()
    store.dispatch(createSchool(this.state))
  }

  render(){
    return(
      <div>
        <h3>Create School:</h3>
        <hr />
        <br />
        <form id='createForm' onSubmit={this.handleSubmit}>
            <label>Name:
                <input type='text' name='name' value={this.state.value} onChange={this.handleChange}/>
            </label>
            <label>Address:
                <input type='text' name='address' value={this.state.value} onChange={this.handleChange}/>
            </label>
            <label>Description:
                <input type='text' name='description' value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type='submit' value='Create' />
        </form>
      </div>
    )
  }
}


export default connect()(SchoolForm)