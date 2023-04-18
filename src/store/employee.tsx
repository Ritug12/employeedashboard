import { configureStore, createSlice } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";

// // const employeeState = {dataAdded:false}
// const addEmpSlice =createSlice({
//     name:'employee',
//     initialState:{
//         FormData:[],
//         dataAdded:false
//     },
//     reducers:{
//         saveFormData:(state:any,action:any)=>{
//             state.formData.push(action.payload)
//         },
//         isDataAdded(state:any){
//             state.dataAdded=true;
//         }
        

//     }
// });


interface FormData {
    id: string;
    name: string;
  }
  
  interface FormState {
    formData: FormData[];
  }
  
  const initialState: FormState = {
    formData: []
  };
  
  const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      addFormData: (state, action) => {
        state.formData.push(action.payload);
      }
    }
  });
  
  export const { addFormData } = formSlice.actions;
  
  

export const employeeAction = formSlice.actions;

// export default formSlice.reducer;

const store = configureStore({
    reducer: {
      form: formSlice.reducer
    }
  });

  export default store;