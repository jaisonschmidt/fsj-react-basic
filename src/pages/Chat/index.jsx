import React, { useEffect } from "react";
import io from "socket.io-client";

import { HeaderMain } from "../../components/elements/HeaderMain";
import { MessageForm } from "../../components/elements/MessageForm";
import { MessageItem } from "../../components/elements/MessageItem";
import { MessageList } from "../../components/elements/MessageList";

// no componentDidMount conectar ao servidor de websocket
// escutar eventos do servidor de websocket
// emitir eventos ao servidor de websocket

const Chat = ({ email }) => {
  useEffect(() => {
    console.log("Entrou no useEffect");
    const socket = io("https://helloworld-75kbewdfya-uc.a.run.app/");
    console.log(email);
    socket.emit("enterChat", email === "" ? "aaaa" : email, function (param) {
      console.log("parametro");
    });
  }, [email]);

  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <HeaderMain />

      <MessageList>
        <MessageItem
          from="Outro usuário"
          message="texto texto texto texto"
          type="secondary"
        />

        <MessageItem
          from="Eu"
          message="texto texto texto texto"
          type="warning"
        />

        <MessageItem
          from="Sistema"
          message="texto texto texto texto"
          type="info"
        />
      </MessageList>

      <MessageForm />
    </div>
  );
};

export default Chat;
