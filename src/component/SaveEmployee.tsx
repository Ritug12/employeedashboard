import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFormData } from "../store/employee";
import './AddEmp.css';

interface FormProps {
  // onAdd: () => void;
}

const SaveEmployee: React.FC<FormProps> = () => {

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [searchedVal, setSearchedVal] = useState("");
  const [empid, setEmpId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addFormData({ name, empid, id }));
    setName('');
    setEmpId('')
    // onAdd();
  };

  return (
    <div>
     
        {/* <Grid item xs={4}>
      <input type="text" placeholder="Search table..." /></Grid> */}
    
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='empid' style={{margin:'10px'}}>Employee Name: </label>
          <input type="empid" required value={name} onChange={(e) => setName(e.target.value)} />
        
        
          <label htmlFor='name' style={{margin:'10px'}}>Employee Code: </label>
          <input type="name" required value={empid} onChange={(e) => setEmpId(e.target.value)} />
        
        <button type="submit" style={{marginLeft:'10px', backgroundColor:'black', color:'white'}}>Add Employee</button></div>
      </form>
    </div>
  );
};

export default SaveEmployee;
