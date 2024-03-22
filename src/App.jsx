import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductPage from './Pages/Controller/Controller'
import HomePage from './Pages/Home/Home'
import Services from './Pages/Services/Services'

const App = () => {

  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/service' element={<Services/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
