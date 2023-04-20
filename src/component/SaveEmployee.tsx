import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFormData } from "../store/employee";
import './AddEmp.css';

interface FormProps {
  onAdd: () => void;
}

const SaveEmployee: React.FC<FormProps> = ({ onAdd }) => {

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [empid, setEmpId] = useState('');
  const dispatch = useDispatch();
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addFormData({ name, empid, id }));
    setName('');
    setEmpId('')
    onAdd();
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor='empid'>Employee Id</label>
          <input type="empid" required value={empid} onChange={(e) => setEmpId(e.target.value)} />
        </div>
        <div className="control">
          <label htmlFor='name'>Employee Name</label>
          <input type="name" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default SaveEmployee;
