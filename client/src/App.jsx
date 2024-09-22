import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Page3 from './pages/page3'
import Page1 from './pages/page1'
import Modal from './pages/Modal';
// import Haha from './pages/Haha';
import Upload from './components/Upload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Page1 />} />
          <Route path="/page3" element={<Page3 />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/modal" element={<Modal />} />
        {/* <Route path="/haha" element={<Haha />} /> */}
        <Route path="/upload" element={<Upload/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
