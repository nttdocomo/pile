import * as React from 'react';


import PropTypes from 'prop-types';

const Button = ({ children, type }) => {
  const cls = `pile-button-${type}`;
  return (
    <button className={cls}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger']),
};

export default Button;
