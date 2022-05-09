import React, {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Forms';
import About from './Components/About';
import AlertComponent from './Components/AlertComponent';
import Accordian from './Components/Accordian';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <div className="container">
        <Routes>
          <Route path="/" element={<Form  showAlert={showAlert} mode={Mode} Heading="Word Counter"/>} />
          <Route path="/about" element={<About />} />
          <Route path="/accordian" element={<Accordian />} />
        </Routes>
        </div>
        </Router>
      
      
      
    </>
  );
}

export default App;
