import React from 'react'
// import pizzaCart from '../pizzaCart'
import { pizzaCart } from '../pizzas'
import  '../Cart.css'

const Cart = ({cart, setCart}) => {

    // se trae desde el app.jsx
    // const [cart, setCart] = useState([])

    const increaseQuantity = (id) => {
        setCart(cart.map((pizza) =>
            pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
        ))
    }

    const decreaseQuantity = (id) => {
        setCart(cart.map((pizza) =>
            pizza.id === id && pizza.quantity > 0
            ? { ...pizza, quantity: pizza.quantity -1 }
            : pizza
        ).filter(pizza => pizza.quantity > 0)
        )
    }

    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0)

    return (
        <div className='container mt-5'>
            <h2 className='text-center mb-4'>🛒 Tu Carrito</h2>
            {cart.length > 0 ? (
                <>
                    {cart.map(pizza => (
                        <div key={pizza.id} className='card mb-3 shadow-sm'>
                            <div className='row g-0'>
                                <div className='col-md-4'>
                                    <img src={pizza.img} alt={pizza.name} className='img-fluid rounded-start'/>
                                </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{pizza.name}</h5>
                                        <p className='card-text'>Precio: {pizza.price.toLocaleString}</p>
                                        <p className='card-text'>Cantidad: {pizza.quantity}</p>
                                        <div className='d-flex align-items-center'>
                                            <button className='btn btn-outline-primary me-2' onClick={() => increaseQuantity(pizza.id)}>+</button>
                                            <button className='btn btn-outline-danger' onClick={() => decreaseQuantity(pizza.id)}>-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='text-center  mb-3'>
                        <h4>Total: ${total.toLocaleString()}</h4>
                        <button className='btn btn-success'>Pagar</button>
                    </div>
                </>
            ) : (
                <h4 className='text-center'>El carrito está vacio</h4>
            )}
        </div>
    )

}

export default Cart


//   return (
//     <div className='cart'>
//         {cart.map(pizza => (
//             <div key={pizza.id}>
//                 <img src={pizza.img} alt={pizza.name} />
//                 <h5>{pizza.name}</h5>
//                 <p>Price: ${pizza.price}</p>
//                 <p>Quantity: {pizza.quantity}</p>
//                 <button onClick={() => increaseQuantity(pizza.id)}>+</button>
//                 <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
//             </div>
//         ))}
//         <h4>Total: ${total}</h4>
//         <button>Pagar</button>
//     </div>
//   )
//}

// export default Cart