import React from "react";

import { Button } from "../../atomic/Button";
import { Input } from "../../atomic/Input";
import { Select, Option } from "../../atomic/Select";

export const MessageForm = () => {
  return (
    <div className="bg-primary d-flex p-3">
      <div className="flex-grow-1 mr-3">
        <Input
          style={{ marginBottom: ".25rem" }}
          size="lg"
          placeholder="Mensagem..."
        />

        <Select size="sm">
          <Option>Selecione...</Option>
        </Select>
      </div>
      <Button color="light">Enviar</Button>
    </div>
  );
};
