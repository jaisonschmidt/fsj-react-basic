import React from "react";

export default class App extends React.Component {
  componentDidMount() {
    // quando este componente for criado
    console.log("Este componente foi criado");
  }

  componentWillUnmount() {
    // quando este componente for destruido
    console.log("Este componente foi removido");
  }

  componentDidUpdate() {
    // quando este componente for atualizado
    console.log("Este componente foi atualizado.");
  }

  handleClick() {
    alert("Você clicou!");
  }

  render() {
    return (
      <>
        <div>Ola</div>
      </>
    );
  }
}
