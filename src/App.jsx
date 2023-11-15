import SignInSide from "./pages/SignIn"
import Dashboard from "./pages/DashBoard"
import Nav from "./components/Nav";
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <>
      <Nav />
    </>
  )
}

export default App
