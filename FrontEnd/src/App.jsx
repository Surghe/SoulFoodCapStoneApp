import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'


import Homepage from './pages/Homepage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Auth from './pages/Auth.jsx'
import NotFound from './pages/NotFound.jsx'


function App() {
  const [AddMenuItem, setAddMenuItem] = useState(null);
  useEffect(() => {
    async function getData() {
      let res = await axios.get("http://localhost:5000/api/menu")
      setAddMenuItem(res.data);
    }
    getData();
  }, [])


  return (
    <>
      <Routes>
        <Route path='/' element={Homepage}/>
        <Route path='/Dashboard' element={Dashboard}/>
        <Route path='/Auth' element={Auth}/>
        <Route path='/NotFound' element={NotFound}/>
      </Routes>

    </>
  )
};

export default App;
