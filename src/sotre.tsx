import { configureStore, createSlice } from "@reduxjs/toolkit";

let test = createSlice({
  name : 'test',
  initialState : {name : 'lee', age : 20},
  reducers : {
    testP(state, action){
      state.age = action.payload ;
    }
  }
})

export let {testP} = test.actions

export default configureStore({
  reducer : {
    test : test.reducer
  }
})