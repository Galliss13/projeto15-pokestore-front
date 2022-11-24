import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register, Store, Checkout } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Register/>}></Route>
        <Route path='/signin'element={<Login/>}></Route>
        <Route path='/store'element={<Store/>}></Route>
        <Route path='checkout'element={<Checkout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
