import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [menuItems, setMenuItems] = useState(null);
  useEffect(()=>{
  async function getData (){
    let res = await axios.get("http://localhost:5000/api/menu")
    setMenuItems(res.data);
  }
  getData();
  }, [])


  return (
    <>
      
    </>
  )
}

export default App
