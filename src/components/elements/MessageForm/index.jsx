import React, {useState} from "react";

import { Button } from "../../atomic/Button";
import { Input } from "../../atomic/Input";
import { Select, Option } from "../../atomic/Select";

export const MessageForm = ({users, socket, email}) => {
  
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    socket.emit("sendMessage", { msg: message, usu: to }, () => {
      setMessage("");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-primary d-flex p-3">
        <div className="flex-grow-1 mr-3">
          <Input
            style={{ marginBottom: ".25rem" }}
            size="lg"
            placeholder="Mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            maxLength="250"
          />

          <Select size="sm" value={to} onChange={ (e) => setTo(e.target.value)}>
            <Option value="">Enviar para todos</Option>
            {users.filter( (obj) => obj !== email ).map( (obj, key) => (
              <Option value={obj} key={key}>{obj}</Option>
            ))}
          </Select>
        </div>
        <div>
          <Button type="submit" color="light">Enviar</Button>
        </div>
      </div>
    </form>
  );
};
