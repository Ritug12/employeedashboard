import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addFormData } from "../store/employee";
import  './AddEmp.css';

interface FormProps {
  onAdd: () => void;
}

const SaveEmployee: React.FC<FormProps> = ({ onAdd }) =>{

    const [name, setName] = useState('');
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addFormData({ name, id }));
    setName('');
    setId('');
    onAdd();
  };

  return (
    <div className="login">
    <form onSubmit={handleSubmit}>
    <div className="control">
    <label htmlFor='id'>Employee Id</label>
        <input type="id" required value={id} onChange={(e) => setId(e.target.value)} />
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
