import React, { useState, useEffect} from "react";
import ReactDom from "react-dom/client";
import { Posts } from "./Posts";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

//Hooks
function Counter() {
  //Usar el Hook para actualizar una variable
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(100);
        }}
      >
        Default
      </button>
      <hr/>
    </div>
  );
}

function Message() {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  //El useEffect se ejecuta siempre que algun elemento del componente cambió. 
  // useEffect(function (){
  //   console.log('render')
  // })  
  //Si queremos que solo se ejecute cuando el componente es creado, le agregamos un array vacio asi:
  // useEffect(() =>{
  //   console.log('render')
  // },[])  
  //Tambien podemos especificar que la actulización dependa de otro evento hacemos la dependecia en el array 
  useEffect(() =>{
    console.log('render')
  },[counter])  

  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje escrito es: " + message);
        }}
      >
        Save
      </button>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Contar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
    <Message />
  </>
);
