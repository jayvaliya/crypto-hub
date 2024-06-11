import './App.css';
import Home from './pages/Home';
import CoinInfo from './pages/CoinInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tax from './pages/Tax';
import ResourceCenter from './pages/ResourceCenter';

function App() {
  return (
    <div className='m-0 p-0 box-border overflow-auto font-["Rubik Doodle Triangles"] bg-zinc-900 w-screen h-screen text-white transition'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:id' element={<CoinInfo />} />
          <Route path='/Taxes' element={<Tax />} />
          <Route path='/Resources' element={<ResourceCenter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
