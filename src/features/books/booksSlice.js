import { createSlice } from "@reduxjs/toolkit";

//our fake posts / our initialState / ensure the variable is correctly named initialState 
const initialState  = [
    {id: '1', title: 'Gifted Hands!', content: 'Ben Carson, M.D., works medical miracles. In Gifted Hands, he tells of his inspiring odyssey from his childhood in inner-city Detroit to his position as director of pediatric neurosurgery at Johns Hopkins Hospital at age 33.'},
    {id: '2', title: 'Born a Crime!', content: 'In this award-winning Audible Studios production, Trevor Noah tells his wild coming-of-age tale during the twilight of apartheid in South Africa.'}
]

//creating our posts slice with an intial render state : i.e. compilation of reducer logic for that feATURE
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      //reducer function to add posts 
      postAdded(state,action){
        // .push method creates a new copy of our state thus processing immutability 
        state.push(action.payload)
      }
    }
  })

//exporting our action creator 
export const {postAdded} = booksSlice.actions
//exporting our slice 
export default booksSlice.reducer

