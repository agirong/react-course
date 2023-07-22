import React from "react";
import ReactDom from "react-dom/client";
import { Posts } from "./Posts";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

//Arreglo de objetos de JS
const user = [
  {
    id: 1,
    name: "Aaron Giron",
    job: 'Dev',
    image: "https://robohash.org/user1",
  },
  {
    id: 1,
    name: "Kelly Vilchez",
    job: 'DBA',
    image: "https://robohash.org/user2",
  },
  {
    id: 1,
    name: "Denis Zelaya",
    job: 'Sr. Dev',
    image: "https://robohash.org/user3",
  }
];

root.render(
  <>
    {user.map((u, i) => {
      return <div key={i}>
        <h1 >{u.name}</h1>
        <p>{u.job}</p>
        <img src={u.image}/>
      </div>;
    })}
  </>
);
