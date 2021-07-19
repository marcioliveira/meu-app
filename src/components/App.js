import React from "react";

class App extends React.Component {
  render() {
    return (
      // podemos usar tags html e javascript dentro do nosso método render é o que chamamos de JSX
      // Se não quisermos usar tags html para envolver nosso retorno. Ex: <div>. podemos usar um fragment <>
      <>
        <form action="">
          <fieldset>
            <legend>
              Contato (Este conteudo esta dentro do meu componente tipo classe
              App1)
            </legend>

            <label for="name">Nome Completo:</label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Como gostaria de ser chamado"
            />
            <br />
            <br />

            <label for="email">Email:</label>
            <br />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="fulano@empresa.com"
            />
            <br />
            <br />

            <label for="message">Mensagem:</label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="10"
              placeholder="Digite sua mensagem aqui"
            ></textarea>
            <br />
            <br />
            <button type="submit">Enviar</button>
          </fieldset>
        </form>
      </>
    );
  }
}

export default App;
