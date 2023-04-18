import React from 'react';
import { useSelector } from 'react-redux';
// import RootState from '../store/employee'
import './AddEmp.css'

interface TableProps {
    onBack:()=>void
}

const Table: React.FC<TableProps> = ({onBack}) => {
  const formData = useSelector((state: any) => state.form.formData);

  return (
    <div className='form_data'>
        <button className='button' onClick={onBack}>Add Employees</button>
        <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((data:any, i:any) => (
          <tr key={i}>
            <td>{data.id}</td>
            <td>{data.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
