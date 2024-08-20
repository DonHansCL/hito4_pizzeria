import { useState, useEffect } from "react"

const Pizza = ({ pizzaId }) => {

    const [pizza, setPizza] = useState(null)

    const url = `http://localhost:5000/api/pizzas/${pizzaId}`

    const getPizzaData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setPizza(data)
    }

    useEffect(() => {
        getPizzaData()
    }, [pizzaId])

    if (!pizza) {
        return <p>Cargando ....</p>  // muestra un mensaje de carga mientras obtiene los datos
    }

    return (
        <div className="container py-3">
            <div className="card">
                <div className="row ">
                    <div className="col">
                        <img src={pizza.img} alt={pizza.name} className="card-img-top rounded mx-auto d-block" />
                    </div>
                    <div className="col-md-8 px-3">
                        <div className="card-block px-3">
                            <h2 className="card-title">🍕  {pizza.name}</h2>
                            <p className="card-text text-start">{pizza.desc} </p>
                            <p className="card-text "><strong>Ingredientes: </strong></p>
                            <ul className="card-text list-inline">
                                {pizza.ingredients.map((ingredient, index) => (
                                    <li key={index} className="list-inline-item">🍕  {ingredient}</li>
                                ))}
                            </ul>
                            
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                {/* <button className="btn btn-warning">Ver más</button> */}
                                <h4 className="mb-0"><strong>Precio: </strong>${pizza.price.toLocaleString()}</h4>
                                <button className="btn text-white bg-dark btn-sm"><strong>Añadir</strong> 🛒</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pizza