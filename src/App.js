import React from "react";

class App extends React.Component {
  render() {
    return (
      // podemos usar tags html e javascript dentro do nosso método render é o que chamamos de JSX
      // o simbolo abaixo indica um fragmento que usado para encapusular os elementos que serão retornados
      <>
        <p>primeiro paragrafo</p>
        <p>segundo paragrafo</p>
        <p>{new Date().toLocaleDateString("pt-BR")}</p>
      </>
    );
  }
}

export default App;
