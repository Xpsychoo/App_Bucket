import React, {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Forms';
import About from './Components/About';
import AlertComponent from './Components/AlertComponent';
import Accordian from './Components/Accordian';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActionOne from './Components/Action_one';
import Calculator from './Components/Calculator';
import NewApp from './Components/NewApp';
import Photography from './Components/Photography';
import Login from './Components/Login';
import TodoList from './Components/ToDoList/TodoList';
import Increment from './Components/incrrApp/incrementMain';
import AddName from './Components/AddName';
import ExpenseChart from './Components/ExpenseChart';
function App() {

   const [Mode, SetMode] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
   }
   const toggleMode = () => {
     if (Mode === 'light'){
      SetMode ('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = '#fff';
      showAlert("dark mode has been enabled", "success");
     }
     else{
      SetMode ('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#212529';
      showAlert("Light mode has been enabled", "success");

     }
   }

  return (
    <>
    <Router>
      <Navbar name="Textbook" dropName="More" mode={Mode} toggleMode={toggleMode} />
      <AlertComponent alert={alert}/>
      <div className="Main-Box">
        <Routes>
          <Route path="/" element={<Form  showAlert={showAlert} mode={Mode} Heading="Word Counter"/>} />
          <Route path="/about" element={<About />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/actionone" element={<ActionOne />} />
          <Route path="/newapp" element={<NewApp />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/expense" element={<ExpenseChart />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/incrementMain" element={<Increment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addname" element={<AddName />} />
        </Routes>
        </div>
        </Router>
      
      
      
    </>
  );
}

export default App;
