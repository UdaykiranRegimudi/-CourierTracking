import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Admin/Home'
import Login from './Components/Admin/Login'
import Nav from './Components/Admin/Nav'
import Coriers from './Components/Admin/Coriers'
import Tracking from './Components/Admin/Tracking'



const App = () =>{
  return(
    <div className='background pl-20 pt-10 pr-28 pb-5'>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path="/courier" element={<Coriers/>}/>
        <Route path="/tracking" element={<Tracking/>}/>
      
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App