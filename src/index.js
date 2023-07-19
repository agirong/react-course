import React from "react";
import ReactDom from "react-dom/client";
import { Mostrar, UserCard } from "./Mostrar";
import Product, { SubPorducts } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

// function Saludar() {
//   const married = false;

//   return <h1>{married ? "Casado 😅" : "Soltero 😀"}</h1>;
// }

//Declarar una función para el evento.
const handleChange = (e) => {
  console.log(e.target.value);
};

root.render(
  <>
    <TaskCard ready={false} />
    <Button text="Texto" />
    <input id="hola" onChange={handleChange}></input>
    <TaskCard ready={true} />
    <Saludar />

    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert("Enviando datos del form");
      }}
    >
      <h1>Registro de Usuario</h1>
      <button>Enviar</button>
    </form>
    {/* <Button text = "Click Me"/>
    <Button text = "Buy"/>
    <Button text = "" name="Aaron"/> */}
    {/* <UserCard
      name="Aaron Giron"
      amount={34000}
      married={false}
      points={[99, 33.33, 22.2]}
      address={{ street: "Blv. St Cristina", city: "Tegucigalpa" }}
      alerta={function () {
        alert("Hola");
      }}
    />
    <UserCard
      name="Kelly Vilchez"
      amount={50000}
      married={false}
      points={[90, 33.33, 22.2]}
      address={{ street: "Cerro Grande", city: "Tegucigalpa" }}
    />
    <UserCard
      name="Denis Zelaya"
      amount={60000}
      married={true}
      points={[90, 33.33, 22.2]}
      address={{ street: "Reitoca", city: "Reitoca" }}
    /> */}
  </>
);
