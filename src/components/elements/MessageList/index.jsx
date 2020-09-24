import React from "react";

export const MessageList = ({ children }) => {
  return <div className="flex-grow-1 p-3 overflow-auto">{children}</div>;
};
