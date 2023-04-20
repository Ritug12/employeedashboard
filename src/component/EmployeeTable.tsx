import { TableContainer, Button, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TableBody, Table, TableCell, TableHead,TableRow } from '@mui/material';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteRow } from "../store/employee";
import { useDispatch, useSelector } from 'react-redux';
import './AddEmp.css'
import Search from './Search';
import SaveEmployee from './SaveEmployee';

interface TableProps {
  onBack: () => void
}

const EmployeeTable: React.FC<TableProps> = ({ onBack }) => {
  const formData = useSelector((state: any) => state.form.formData);

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();


  const handleDelete = (id: any) =>
    dispatch(deleteRow(formData.id))
  console.log(formData.id);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <div className='top_form'>
        <input type="text" placeholder="Search table..." />
        <button onClick={onBack}>Add Employees</button></div>
      <div className='form_data'>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Employee Code</TableCell>
                <TableCell>Action&nbsp;</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {formData.map((data: any) => (
                <TableRow key={data.id}>
                  <TableCell>{data.empid}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleDelete(data.id)} variant="outlined" startIcon={<DeleteIcon />}>
                      Delete</Button>
                    <Button variant="outlined" onClick={handleClickOpen} startIcon={<EditIcon />}>
                      Modify</Button></TableCell>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      Edit Employee Data
                    </DialogTitle>
                    <DialogContent>
                      <div><label htmlFor='empid'>Employee Id</label>
                        <input type="empid" value={formData.empid} />
                      </div>
                      <div className="control">
                        <label htmlFor='name'>Employee Name</label>
                        <input type="name" value={formData.name} /></div>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Save</Button>
                      <Button onClick={handleClose} autoFocus>
                        Cancel
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer></div>
    </div>
  );
};

export default EmployeeTable;
