
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Post from './Page/Post'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/post' element={<Post/>}/>
     </Routes>
      
    </>
  )
}

export default App
