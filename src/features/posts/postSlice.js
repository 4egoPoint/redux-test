import { createSlice } from "@reduxjs/toolkit";



const initialState = [
   { id: 1, title: 'pizza', content: "we sell pizza" },
   { id: 2, title: 'money', content: "we exchange money" },
   { id: 3, title: 'peoples', content: "we exchange peoples" },
]

const postSlice = createSlice({
   name: 'posts',
   initialState,
   reducers: {
      postAdded(state, action) {
         state.push(action.payload)
      }
   }
})


export const selectAllPosts = (state) => state.posts

export const { postAdded } = postSlice.actions

export default postSlice.reducer