import './App.css';
import Home from './pages/Home';
import CoinInfo from './pages/CoinInfo'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='m-0 p-0 box-border overflow-auto font-["Rubik Doodle Triangles"] bg-[#EFF2F5] w-screen h-screen'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:id' element={<CoinInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
