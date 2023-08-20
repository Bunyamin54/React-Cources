import axios from "axios"
import {toastErrorNotify, toastSuccesNotify } from "../helper/ToastNotify"

 import {useNavigate}  from "react-router-dom"  
 import {useDispatch } from "react-redux"
 import {fetchFail, fetchStart, loginSuccess} from "../features/authSlice"

 export const login = async (userData) => {
  //? bir hook sadece bir react componet ve bir custom hook icerisinde cagrilabilir bir js fonksiyonu icerisnde hook cagrilamaz
   const navigate = useNavigate()
   const useDispatch = useDispatch()

    const BASE_URL = "https://14113.fullstack.clarusway.com"
   dispatchEvent(fetchStart())
    try {
     const {data} = await axios.post(
        `${BASE_URL}/account/auth/login/`,
        userData
     )
  dispatchEvent(loginSuccess(data))
  toastSuccesNotify ("Login islemi basarili")
  navigate("/stock")
 
 } catch (error) {
   
    console.log(error)
    dispatchEvent(fetchFail())
 } 
}

