import React from "react";

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: "" };
    this.changeName = this.changeName.bind(this);
  }

  changeName = (event) => {
    this.setState({ nome: event.target.value });
  };

  render() {
    return (
      <div className="box">
        <form>
          <input
            type="text"
            value={this.state.nome}
            onChange={this.changeName}
            //onChange={(event) => setSearch(event.target.value)}
          />
          <button>Enviar</button>
          <p>Olá {this.state.nome}</p>
        </form>
      </div>
    );
  }
}

export default App4;
