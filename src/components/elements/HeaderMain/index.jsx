import React from "react";

import { Button } from "../../atomic/Button";

export const HeaderMain = () => {
  return (
    <header className="bg-primary d-flex p-3 text-white">
      <div className="flex-grow-1 overflow-hidden mr-3">
        <small>Conectado como:</small>
        <div className="font-weight-bold">
          jaisonschmidt@farmaciassaojoao.com.br
        </div>
      </div>

      <Button color="light">Sair</Button>
    </header>
  );
};
