import React from "react";
import PropTypes from "prop-types";

export const Input = ({ type, size, ...props }) => {
  let inputSize = size !== "" ? ` form-control-${size}` : ``;

  return (
    <input type={type} className={`form-control${inputSize}`} {...props} />
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(["sm", "", "lg"]),
  type: PropTypes.oneOf([
    "text",
    "email",
    "number",
    "password",
    "search",
    "tel",
    "date",
    "url",
  ]),
};

Input.defaultProps = {
  size: "",
  type: "text",
};
