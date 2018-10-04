import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSchool } from './store'

class SchoolFormEdit extends Component {
  constructor(props) {
    super(props)
    const { school } = this.props
    this.state = {
      name: school ? school.name : '',
      address: school ? school.address : '',
      description: school ? school.description : '',
      id: school ? school.id : ''
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
    const { updateSchool } = this.props
    evt.preventDefault()
    updateSchool(this.state)
    this.setState = {
      name: '',
      address: '',
      description: ''
    }
  }

  render(){
    return(
      <div>
        <h3>Update School:</h3>
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
            <button value='Update' onClick={() => updateSchool(this.state)}>Update</button>
        </form>
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
    updateSchool: school => dispatch(updateSchool(school))
  })

export default connect(mapStateToProps, mapDispatchToProps)(SchoolFormEdit)
