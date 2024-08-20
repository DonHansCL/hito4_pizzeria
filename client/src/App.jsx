import React from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import Home from './components/Home'
import './App.css'
import Login from "./components/Login"
import Cart from "./components/Cart"
// import pizzaCart from "./pizzaCart"
import { pizzaCart } from "./pizzas" // se pone asi para que tome el array especifico y no todo el archivo
import { useState } from "react"
import Pizza from "./components/Pizza"


const App = () => {
    const [cart, setCart] = useState(pizzaCart)

    // Funcion para calcular la cantidad total de productos
    const totalQuantity = cart.reduce((acc, pizza) => acc + pizza.quantity, 0)

    // Funcion para calcular el total del carrito
    const totalPrice = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0)

  return (
    // <div className="container-fluid p-0">
    <div className="app-container">
      <Navbar totalQuantity={totalQuantity} totalPrice={totalPrice}/>
      <main className="main-content">
      {/* <Home /> */}
      {/* <Register/>
      <Login/>  */}
      <Pizza pizzaId="p001"/>
      </main>   
      {/* <Cart cart={cart} setCart={setCart}/>   */}
      <Footer />
    </div>
  )
}

export default App;
