import React, {useEffect, useRef} from "react";

export const MessageList = ({ children, messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);
  return (
    <div  className="flex-grow-1 p-3 overflow-auto">
      {children}
      <div ref={messagesEndRef} />
    </div>
  );
};
