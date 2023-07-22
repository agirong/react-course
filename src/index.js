import React from "react";
import ReactDom from "react-dom/client"
import {Posts} from './Posts'

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

root.render(
  <>
  <Posts/>
  </>
);
