import React from "react";
import PropTypes from "prop-types";

// destructuring
export const Button = ({ color, children, ...props }) => {
  return (
    <button type="button" className={`btn btn-${color}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "link",
  ]),
};

Button.defaultProps = {
  color: "primary",
};
