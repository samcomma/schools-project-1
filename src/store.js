import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import logger from 'redux-logger'


// ACTION TYPES:
const GET_SCHOOLS = 'GET_SCHOOLS'
const CREATE_SCHOOL = 'CREATE_SCHOOL'
const UPDATE_SCHOOL = 'UPDATE_SCHOOL'
const DELETE_SCHOOL = 'DELETE_SCHOOL'
const GET_STUDENTS = 'GET_STUDENTS'
const CREATE_STUDENT = 'CREATE_STUDENT'
const UPDATE_STUDENT = 'CREATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'


// ACTION CREATORS:
const get_Schools = (schools) => ({
  type : GET_SCHOOLS,
  schools
})

const create_School = (school) => ({
  type : CREATE_SCHOOL,
  school
})

const update_School = (school) => ({
  type : UPDATE_SCHOOL,
  school
})

const delete_School = (school) => ({
  type : DELETE_SCHOOL,
  school
})

const get_Students = (students) => ({
  type : GET_STUDENTS,
  students
})

const create_Student = (student) => ({
  type : CREATE_STUDENT,
  student
})

const update_Student = (student) => ({
  type : UPDATE_STUDENT,
  student
})

const delete_Student = (student) => ({
  type : DELETE_STUDENT,
  student
})



const getSchools = () => {
  return (dispatch) => {
    axios.get('/api/schools')
      .then(res => res.data)
      .then(schools => dispatch(get_Schools(schools)))
  }
}

const createSchool = (school) => {
  return (dispatch) => {
    axios.post('/api/schools', school)
      .then(res => res.data)
      .then(school => dispatch(create_School(school)))
  }
}

const updateSchool = (school) => {
  return (dispatch) => {
    axios.put(`/api/schools/${school.id}`, school)
      .then(res => res.data)
      .then(school => dispatch(update_School(school)))
  }
}


const deleteSchool = (school) => {
  return (dispatch) => {
    axios.delete(`/api/schools/${school.id}`)
      .then(res => res.data)
      .then(() => dispatch(delete_School(school)))
  }
}


const getStudents = () => {
  return (dispatch) => {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => dispatch(get_Students(students)))
  }
}


const createStudent = (student) => {
  return (dispatch) => {
    axios.post('/api/students', student)
      .then(res => res.data)
      .then(student => dispatch(create_Student(student)))
  }
}


const updateStudent = (student) => {
  return (dispatch) => {
    axios.put(`/api/students/${student.id}`, student)
      .then(res => res.data)
      .then(student => dispatch(update_Student(student)))
  }
}



const deleteStudent = (student) => {
  return (dispatch) => {
    axios.delete(`/api/students/${student.id}`)
      .then(res => res.data)
      .then(() => dispatch(delete_Student(student)))
  }
}



// REDUCERS:
const schoolsReducer = (state = [], action) => {
    switch (action.type) {
      case GET_SCHOOLS:
        return action.schools
      case CREATE_SCHOOL:
        return [...state, action.school]
      case UPDATE_SCHOOL:
        return state.map(school => (school.id !== action.school.id ? school : action.school))
      case DELETE_SCHOOL:
        return state.filter(school => school.id !== action.school.id)
      default:
        return state
    }
  }

  
const studentsReducer = (state = [], action) => {
    switch (action.type) {
      case GET_STUDENTS:
        return action.students
      case CREATE_STUDENT:
        return [...state, action.student]
      case UPDATE_STUDENT:
        return state.map(student => (student.id !== action.student.id ? student : action.student))
      case DELETE_STUDENT:
        return state.filter(student => student.id !== action.student.id)
      default:
        return state
    }
  }


const reducer = combineReducers({
    schools: schoolsReducer,
    students: studentsReducer
})
  

// STORE:
const store = createStore(reducer, applyMiddleware(logger, thunk))


export default store
// DO I NEED TO EXPORT?:
export { 
  getSchools,
  createSchool,
  updateSchool,
  deleteSchool,
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
}



