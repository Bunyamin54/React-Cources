import { createSlice } from '@reduxjs/toolkit'

//? action creator fonskiyonlarini hemde reduceri tek bir hamlede olusturabiliriz. 

const initialState = {
    user : "",
}

const authSlice = createSlice ({

 name : "auth", //? action type i olusturmak icin
 initialState,  //? statin baslangic degeri veiyoruz 
 reducers:{  //? action creater fonks ve reducer icin 
  
  setUser: (state, action)  => {

     state.user = action.payload

  }

  clearUser : (state) => {
    state.user = ""
  }
 }
})
//? olusan action fonksiyonlari sliceAdi.actions"dan destructure edilerek export edilir. 
export const { setUser,  clearUser} = authSlice.actions
export default authSlice.reducer

//? reducer ise sliceAdi.reducer seklinde export edilir. 