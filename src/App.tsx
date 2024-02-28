import React from "react";
import "App.scss";
import Header from "components/Header/Index";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <p className="h4">Tecnologias</p>
          </div>
          <div className="col-12">
            <p className="h4">Descobrir</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
