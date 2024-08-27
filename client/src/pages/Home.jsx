import React from "react";
import Header from "../components/Header";
import CardPizza from '../components/CardPizza';
import Pizza from "./Pizza";
// import pizzas from '../pizzas'
import { useState, useEffect } from "react";
// import  pizzaCart  from "../pizzas";

const url = "http://localhost:5000/api/pizzas"

const Home = () => {

    // const [cart, setCart] = useState([])
    const [data, setData] = useState([])

    const getData = async () => {
        const response = await fetch(url)
        const pizzas = await response.json()
        setData(pizzas)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container-fluid p-0">
            <Header />
            {/* <div className="row"> */}

            {/* seccion para mostrar CardPizza */}
            <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
                {data.map((pizza) => {
                    // console.log(pizza)
                    return (
                        // <div key={pizza.id} className="col-md-4 col-sm-6 mb-4">
                        <div key={pizza.id} className="col">
                            <CardPizza pizza={pizza} />                            
                        </div>
                    )
                })}
            </div>

            {/* seccion separada para mostrar Pizza
            <div className="container py-3">
                {data.map((pizza) => (
                    <div key={pizza.id} className="col">
                        <Pizza pizza={pizza} />
                    </div>
                ))}
            </div> */}

            {/* <div className="row p-4">
                <div className="col-12 col-md-4">
                    <CardPizza
                        name="Pizza Napolitana"
                        price={5950}
                        ingredients={["mozarella", "tomates", "jamon", "oregano"]}
                        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"  
                    />
                </div>
                <div className="col-12 col-md-4">
                    <CardPizza
                        name="Pizza Española"
                        price={6950}
                        ingredients={["mozarella", "gorgonzola", "parmesano", "provolone"]}
                        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
                    />
                </div>
                <div className="col-12 col-md-4">
                    <CardPizza
                        name="Pizza Pepperoni"
                        price={7950}
                        ingredients={["mozarella", "pepperoni", "oregano"]}
                        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
                    />
                </div>
            </div> */}
        </div>
    )
}

export default Home;