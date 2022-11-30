// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

//  
function App() {
  const [mode, setMode] = useState("light");// whether dark is enable or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is amazing'
      }, 2000)
      setInterval(() => {
        document.title = 'Install TextUtils now'
      }, 1500)
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode'
    }
  }

  const toggleModeRed = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#821e00'
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }

  const toggleModeGrey = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#696969'
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} aboutText="About" toggleMode={toggleMode} toggleModeRed={toggleModeRed} toggleModeGrey={toggleModeGrey} />
      <Alert alert={alert} />
      <div className="container my-3" >
        {/* <Routes>\ */}

        {/* <Route exact path="/about" element={<About />}> */}
        {/* </Route>/ */}

        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Enter the text to analyze below" mode={mode} />}> */}
        {/* </Route> */}
        <TextForm showAlert={showAlert} heading=" Enter the text to analyze below" mode={mode} />
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  )
}
export default App;