import React from "react";

import { HeaderMain } from "../../components/elements/HeaderMain";
import { MessageForm } from "../../components/elements/MessageForm";
import { MessageItem } from "../../components/elements/MessageItem";
import { MessageList } from "../../components/elements/MessageList";

const Chat = () => {
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
