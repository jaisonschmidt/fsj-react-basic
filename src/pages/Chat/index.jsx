import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import { HeaderMain } from "../../components/elements/HeaderMain";
import { MessageForm } from "../../components/elements/MessageForm";
import { MessageItem } from "../../components/elements/MessageItem";
import { MessageList } from "../../components/elements/MessageList";

const Chat = ({ email , handleEmail }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [socket] = useState(io("still-dawn-42110.herokuapp.com"));

  useEffect(() => {
    document.title = `Chat - conectado como ${email}`;
  });

  useEffect(() => {
    console.log('Recebeu o email', email);

    socket.emit("enterChat", email, () => {});
    socket.on("updateMessages", (msg) => setMessages( messages => [...messages, msg]));
    socket.on("updateUsers", (users) => setUsers(users));

    return function chatExit() {
      handleEmail("");
      socket.disconnect();
    }
  }, [email, handleEmail, socket]);

  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <HeaderMain email={email} />

      <MessageList messages={messages}>
        {messages.map( (obj, key) => {
          let type;

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

      <MessageForm email={email} users={users} socket={socket} />
    </div>
  );
};

export default Chat;
