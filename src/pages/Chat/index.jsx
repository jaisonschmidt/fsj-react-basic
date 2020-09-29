import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import { HeaderMain } from "../../components/elements/HeaderMain";
import { MessageForm } from "../../components/elements/MessageForm";
import { MessageItem } from "../../components/elements/MessageItem";
import { MessageList } from "../../components/elements/MessageList";

// no componentDidMount conectar ao servidor de websocket
// escutar eventos do servidor de websocket
// emitir eventos ao servidor de websocket

const Chat = ({ email, handleLogin }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [socket] = useState(io("localhost:8080"));

  useEffect(() => {
    socket.emit("enterChat", email, () => {});

    socket.on("updateMessages", (msg) => setMessages( (messages) => [...messages, msg] ));
    socket.on("updateUsers", (users) => setUsers(users));

    return function chatExit() {
      handleLogin("");
      socket.disconnect();
    }
  }, [email, handleLogin, socket]);

  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <HeaderMain email={email} />

      <MessageList>

        {messages.map( (obj, key) => {
          let type = "";

          switch (obj.tipo) {
            case "sistema" : 
              type = "secondary";
              break;
            case "privada" : 
              type = "warning";
              break;
            default: 
              type = "info";
          }

          return (
            <MessageItem
              message={obj.msg}
              type={type}
              key={key}
            />
          )
        })}

      </MessageList>

      <MessageForm users={users} />
    </div>
  );
};

export default Chat;
