import PropTypes from "prop-types";
import React from "react";
const Calculator = ({ arr }) => {
  return <div>{arr[0] + arr[1]}</div>;
};
export default Calculator;

Calculator.propTypes = {
  arr: PropTypes.array.isRequired,
};
