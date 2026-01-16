// this store is made kyunki data ko centralise krna hai
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './features/counterSlice'  //defualt ecport ko ksi bhi nam se import kr skte h

export const store = configureStore({ 

//ab isme reducers bhi ayenge
    reducer:{
        counter: counterReducer
    }

})   //phehle store ko configure krna padega


