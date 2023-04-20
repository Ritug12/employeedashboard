import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  id: number;
  name: string;
  empid: string;
  }
  
  interface FormState {
    formData: FormData[];
  }
  
  const initialState: FormState = {
    formData: []
  };

  let nextId = 1;
  
  const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      addFormData: (state, action:PayloadAction<any>) => {
        action.payload.id = nextId++;
        state.formData.push(action.payload);
      },
      deleteRow: (state, action) => {
        const id = action.payload;
        state.formData = state.formData.filter((row:any) => row.uid !== id);
      },
      
    },
    
  });
  
  export const { addFormData, deleteRow } = formSlice.actions;
  
  

export const employeeAction = formSlice.actions;

// export default formSlice.reducer;

const store = configureStore({
    reducer: {
      form: formSlice.reducer
    }
  });

  export default store;