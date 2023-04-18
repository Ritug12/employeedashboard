import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SaveEmployee from './component/SaveEmployee';
import Table from './component/Table';

function App() {

  const [showTable, setShowTable] = useState(false);

  const handleAdd = () => {
    setShowTable(true);
  };

  const handleBack = () => {
    setShowTable(false);
  };

  // const addEmployee = useSelector((state:any)=>state.employee.dataAdded);
  return (
    <div className="App">
      {/* <AddEmp /> */}
      {!showTable ? (<SaveEmployee onAdd={handleAdd} />):
      (<Table onBack={handleBack}/>) }
    </div>
  );
}

export default App;
