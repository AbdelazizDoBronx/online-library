import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";




const authReducer = createSlice({
    name : 'auth',
    initialState : {
        userCerdentials : {
            email : 'charles@gmail.com',
            password : 'charles12345'
        },
        status : 'notAuth',
        error : null
    },
    reducers : {
        checkAuth : (state,action)=>{
            const {email,password} = action.payload
            console.log(email,password)
            if(state.userCerdentials.email === email && state.userCerdentials.password === password){
                state.status = 'Auth'
                redirect('/home')
            }else{
                state.error = 'incorrect email or password!'
            }

        }
    }
})

export const {checkAuth} = authReducer.actions
export default authReducer.reducer