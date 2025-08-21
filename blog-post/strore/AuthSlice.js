import { createSlice } from "@reduxjs/toolkit";
const initialstate={
    state:false,
    userData:null
}
const AuthSlice=createSlice({
    name:"auth",
    initialState:initialstate,
    reducers:{
        login:(state,action)=>{
          state.state=true;
          state.userData=action.payload.userData  
        },
        logout:(state)=>{
            state.state=false;
            state.userData=null
        }
    }
})
export const{login,logout}=AuthSlice.actions;
export default AuthSlice.reducer;