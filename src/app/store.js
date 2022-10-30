import { configureStore } from '@reduxjs/toolkit'
//import posts slice to get its reducer functions 
import booksReducer from '../features/books/booksSlice'

//creating redux store 
export default configureStore({
  reducer: {
    books: booksReducer
  }
})




