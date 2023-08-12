import axios from "axios"
import { useNavigate } from "react-router-dom"


export const login =  async (userData) => {

   const navigate = useNavigate ()
    console.log(navigate)
   const BASE_URL = "https://14113.fullstack.clarusway.com/"
 try {
   const {data} = await axios.post(`${BASE_URL}/account/auth/login/`,userData)
    console.log(data)

    navigate ("/stock")
} catch (error) {
    console.log(error)
 }

}