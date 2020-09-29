import React, { useEffect, useRef } from "react";

import { MessageItem } from "../MessageItem";

export const MessageList = ({ messages }) => {
  const messageContainerRef = useRef(null);

  const scrollToBottom = () => {
    messageContainerRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect( scrollToBottom, [messages] );

  return (
    <div className="flex-grow-1 p-3 overflow-auto">
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

        <div ref={messageContainerRef} />
    </div>
  );
};
