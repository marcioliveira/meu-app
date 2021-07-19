import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import "./style.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App2
      title="Titulo usando as props - conteudo dinâmico"
      text="blablabla usando as props - conteudo dinâmico"
    >
      conteudo dinâmico da tag do componente tipo class App2 passado como
      children
    </App2>
    <App2
      title="Titulo2 usando as props - conteudo dinâmico"
      text="blablabla usando as props - conteudo dinâmico"
    >
      conteudo dinâmico da tag do outro componente tipo class App2 passado como
      children
    </App2>
    <App />
    <App3 />
    <App4 />
    <App5 />
    <App6 />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
