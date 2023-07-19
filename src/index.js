import React from "react";
import ReactDom from "react-dom/client";
import { Mostrar, UserCard } from "./Mostrar";
import Product, { SubPorducts } from "./Product";
import {Button} from "./Button"
import {TaskCard} from './Task'
import {Saludar} from './Saludar'
import {Posts} from './Posts'

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);


root.render(
  <>
  <Posts/>
  </>
);
