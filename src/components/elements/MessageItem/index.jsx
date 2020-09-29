import React from "react";
import PropTypes from "prop-types";

export const MessageItem = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`}>
      <div className="mt-2">{message}</div>
    </div>
  );
};

MessageItem.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["warning", "secondary", "info"]),
};

MessageItem.defaultProps = {
  type: "secondary",
};

// alert alert-warning - nossas próprias mensagens
// alert alert-secondary - mensagens de outros usuários
// alert alert-info - mensagens do sistema
