import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser(state,action)
        {
            state.push(action.payload)
        },
        deleteUser(state,action)
        {
            const deleteIndex = action.payload
            return state.filter((val,index)=> index !== deleteIndex)
            
        }
    }
})

export const {addUser,deleteUser} = userSlice.actions
export default userSlice.reducer