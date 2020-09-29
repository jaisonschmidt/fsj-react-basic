import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import { HeaderMain } from "../../components/elements/HeaderMain";
import { MessageForm } from "../../components/elements/MessageForm";
import { MessageList } from "../../components/elements/MessageList";

const Chat = ({ email, handleLogin }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [socket] = useState(io("ec2-3-23-85-152.us-east-2.compute.amazonaws.com:3005"));

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
      <MessageList messages={messages} />
      <MessageForm email={email} users={users} socket={socket} />
    </div>
  );
};

export default Chat;
