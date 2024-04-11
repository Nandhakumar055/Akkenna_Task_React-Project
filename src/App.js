import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'

import './App.css'

const App = () =>(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={HomeRoute} />
    </Routes>
  </BrowserRouter>
)

export default App