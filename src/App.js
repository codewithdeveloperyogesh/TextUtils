import './App.css';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
import ChangeCase from './components/ChangeCase';
import { useState } from 'react';
import Alert from './components/Alert';
//import About from './components/About';
//import { Route, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');

  const [toggleText, setToggleText] = useState('Enable DarkMode');

  const toggleMode = () =>{
    if(mode === 'light'){
      document.body.style.backgroundColor = '#14013c';
      setMode('dark');
      setToggleText('Enable LightMode');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      setToggleText('Enable DarkMode');
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }

  return (
    <>       
      <Navbar title="TextUtils" homeTitle = "Home" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleText={toggleText}/>
      <Alert alert={alert} />
          
      {/* <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<ChangeCase heading="Simply enter your text and choose the case you want to convert it to." mode={mode} showAlert={showAlert} />}/>
      </Routes> */}

      <ChangeCase heading="Simply enter your text and choose the case you want to convert it to." mode={mode} showAlert={showAlert} />
      
    </>
  );
}

export default App;
