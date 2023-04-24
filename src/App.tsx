import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SaveEmployee from './component/SaveEmployee';
import EmployeeTable from './component/EmployeeTable';
import Search from './component/Search';

function App() {

  const [showTable, setShowTable] = useState(false);

  // const handleAdd = () => {
  //   setShowTable(true);
  // };

  const handleBack = () => {
    setShowTable(false);
  };

  // const addEmployee = useSelector((state:any)=>state.employee.dataAdded);
  return (
    <div className="App">
      <EmployeeTable />
      {/* <AddEmp /> */}
      {/* {!showTable ? (<SaveEmployee/>):
      (<EmployeeTable onBack={handleBack}/>) }  */}
    </div>
  );
}

export default App;
