import { configureStore } from '@reduxjs/toolkit'
// import your reducers here
// import exampleReducer from '../features/example/exampleSlice'
import addStudentReducer from './slices/adminSlices/addStudentSlice'
import getAllStudentsReducer from "./slices/adminSlices/getstudentSlice"
import updateStudentReducer from './slices/adminSlices/updateStudentSlice'
import getStudentByIdReducer from './slices/adminSlices/getStudentById'
export const store = configureStore({
  reducer: {
    
    addStudent: addStudentReducer,
    getAllStudents: getAllStudentsReducer,
    updateStudent: updateStudentReducer,
    getStudentById:getStudentByIdReducer
  },
})
