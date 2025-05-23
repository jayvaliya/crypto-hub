import './App.css';
import Home from './pages/Home';
import CoinInfo from './pages/CoinInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tax from './pages/Tax';
import ResourceCenter from './pages/ResourceCenter';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className='m-0 p-0 box-border overflow-auto font-["Rubik Doodle Triangles"] bg-neutral-900 w-screen h-screen text-white transition'>
      <BrowserRouter>
        <RecoilRoot>
          <Navbar />
          <Routes className='pt-5'>
            <Route path='/' element={<Home />} />
            <Route path='/coin/:id' element={<CoinInfo />} />
            <Route path='/Taxes' element={<Tax />} />
            <Route path='/Resources' element={<ResourceCenter />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
