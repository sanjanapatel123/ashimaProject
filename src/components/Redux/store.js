import { configureStore } from '@reduxjs/toolkit'
// import your reducers here
import exampleReducer from '../features/example/exampleSlice'
import addStudentReducer from './slices/adminSlices/addStudentSlice'
export const store = configureStore({
  reducer: {
    // example: exampleReducer,
    addStudent: addStudentReducer,
  },
})
