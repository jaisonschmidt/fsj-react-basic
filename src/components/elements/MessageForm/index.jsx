import React, { useState } from "react";

import { Button } from "../../atomic/Button";
import { Input } from "../../atomic/Input";
import { Select, Option } from "../../atomic/Select";

export const MessageForm = ({users}) => {
  const [to, setTo] = useState("");

  return (
    <div className="bg-primary d-flex p-3">
      <div className="flex-grow-1 mr-3">
        <Input
          style={{ marginBottom: ".25rem" }}
          size="lg"
          placeholder="Mensagem..."
        />

        <Select size="sm" value={to} onChange={ (e) => setTo(e.target.value) }>
          <Option>Selecione...</Option>
        </Select>
      </div>
      <Button color="light">Enviar</Button>
    </div>
  );
};
