import React from "react";

class App2 extends React.Component {
  //para passarmos informação para o nosso componente precisamos criar o metodo construtor que vai receber um para
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="box">
        <div id="title">{this.props.title}</div>
        <div id="text">{this.props.text}</div>
        <div id="text">{this.props.children}</div>
        <p>
          ola! Esse é o conteudo do meu componente estático tipo classe App2{" "}
        </p>
      </div>
    );
  }
}

export default App2;
