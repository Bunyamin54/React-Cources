import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {fetchFail, fetchStart,loginSuccess} from "../features/authSlice"
export const login =  async (userData) => {

const navigate =useNavigate()
const  dispatch =useDispatch()

console.log(dispatch)


   const BASE_URL = "https://14113.fullstack.clarusway.com/"
   dispatch(fetchStart())
   try {
   const {data} = await axios.post(`${BASE_URL}/account/auth/login/`,userData)
 

    dispatch(loginSuccess(data))
    toastSuccesNotify("Login islemi basarili")
    navigate ("/stock")
} catch (error) {
    console.log(error)
    dispatch(fetchFail())
 }

}