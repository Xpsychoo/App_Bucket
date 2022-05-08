import React, {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Forms';
import About from './Components/About';
// import Accordian from './Components/Accordian';

function App() {

   const [Mode, SetMode] = useState('light')
   const toggleMode = () => {
     if (Mode === 'light'){
      SetMode ('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = '#fff'
     }
     else{
      SetMode ('light')
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#212529'
     }
   }

  return (
    <>
      <Navbar name="Textbook" dropName="More" mode={Mode} toggleMode={toggleMode} />
      {/* <About /> */}
      <div className="container">
      {/* <Accordian /> */}
      <Form mode={Mode} Heading="Word Counter"/>
      </div>
    </>
  );
}

export default App;
