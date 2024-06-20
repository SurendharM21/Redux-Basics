import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const passwordSlice = createSlice({
name:'password',
initialState,
reducers:{
    addPassword(state,action)
    {
        state.push(action.payload)
    },
    deletePassword(state,action)
    {
        const deleteIndex = action.payload
      return  state.filter((val,index)=> deleteIndex !== index)
    }
}
})

export const{addPassword,deletePassword} = passwordSlice.actions

export default passwordSlice.reducer