import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enable or not
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500)
  }
  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.getElementById('mybox').style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")

    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container  my-3">
        <TextForm showAlert={showAlert} heading="Enter Text To Analyse" mode={mode} />
        {/* < About /> */}
      </div>
    </>
  );
}

export default App;
