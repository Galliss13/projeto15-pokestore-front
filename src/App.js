import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register, Store, Checkout, Cart } from './pages';
import { useState } from 'react';
import AuthContext from './contexts/AuthContext';

function App() {

  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);

  function authLogin(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  return (
    <AuthContext.Provider value={{auth, authLogin}}>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Register/>}></Route>
          <Route path='/signin'element={<Login/>}></Route>
          <Route path='/store'element={<Store/>}></Route>
          <Route path='/cart'element={<Cart/>}></Route>
          <Route path='checkout'element={<Checkout/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
