import React from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Home from './pages/Home'
import './App.css'
import Login from "./pages/Login"
import Cart from "./pages/Cart"
// import pizzaCart from "./pizzaCart"
import { pizzaCart } from "./pizzas" // se pone asi para que tome el array especifico y no todo el archivo
import { useState } from "react"
import Pizza from "./pages/Pizza"
import { Route, Routes, useLocation } from "react-router-dom"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"


const App = () => {
    const [cart, setCart] = useState(pizzaCart)

    // Funcion para calcular la cantidad total de productos
    const totalQuantity = cart.reduce((acc, pizza) => acc + pizza.quantity, 0)

    // Funcion para calcular el total del carrito
    const totalPrice = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0)


    const location = useLocation()

  const validRoutes = ['/', '/cardpizza', '/cart', '/register', '/home', '/login', '/pizza/p001', '/profile']
  //condicional para mostrar el Navbar
  const shouldShowNavbar = validRoutes.includes(location.pathname)


  return (
    // <div className="container-fluid p-0">
    <div className="app-container">
      {shouldShowNavbar && <Navbar totalQuantity={totalQuantity} totalPrice={totalPrice}/>}
      
      <main className="main-content">      

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
      <Route path='/pizza/p001' element={<Pizza pizzaId="p001"/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>

      <Route path='*' element={<NotFound/>}></Route>
    </Routes>



      {/* <Home /> */}
      {/* <Register/>
      <Login/>  */}
      {/* <Pizza pizzaId="p001"/> */}
      </main>   
      {/* <Cart cart={cart} setCart={setCart}/>   */}
      {/* <Footer /> */}
      {shouldShowNavbar && <Footer/>}
    </div>
  )
}

export default App;
