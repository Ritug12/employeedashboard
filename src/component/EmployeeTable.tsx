import { TableContainer, Button, TextField, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TableBody, Table, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteRow } from "../store/employee";
import { useDispatch, useSelector } from 'react-redux';
import SaveEmployee from './SaveEmployee';
// import './AddEmp.css'

interface TableProps {
  // onBack: () => void
}

const EmployeeTable: React.FC<TableProps> = () => {
  const formData = useSelector((state: any) => state.form.formData);

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [searchedVal, setSearchedVal] = useState("");

  const initialFieldValues = {
    empName: "",
    empCode: "",
  };

  const [userInput, setUserInput] = useState(initialFieldValues);


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
      <Grid container style={{backgroundColor:'white', padding:'12px'}}>
        <Grid item xs={4}>
      <div><input type="text" placeholder="Search by Name" onChange={(e) => setSearchedVal(e.target.value)}/></div></Grid>
      <Grid item xs={8}><SaveEmployee /></Grid>
      </Grid>
      {/* <TextField onChange={(e) => setSearchedVal(e.target.value)} /> */}
      <div style={{marginTop:'10px'}}>
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
              {formData.filter((row:any) =>
                // note that I've incorporated the searchedVal length check here
                !searchedVal.length || row.name
                  .toString()
                  .toLowerCase()
                  .includes(searchedVal.toString().toLowerCase()) 
              ).map((data: any) => (
                <TableRow key={data.id}>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.empid}</TableCell>
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
                      <div><label htmlFor='empid'>Employee Name</label>
                        <input type="empid" value={formData?.length>0 ? formData.empid: ""} />
                      </div>
                      <div>
                        <label htmlFor='name'>Employee Code</label>
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
