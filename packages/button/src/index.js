import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children, className, size, type, nativeType, ...props
}) => {
  const cls = classNames({
    'pile-button': true,
    [`pile-button--${type}`]: true,
    [className]: className,
    [`is-${size}`]: size !== 'normal',
  });

  return (
    <button type={nativeType} className={cls} {...props}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger']),
  nativeType: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
};

Button.defaultProps = {
  type: 'primary',
  nativeType: 'button',
  size: 'normal',
};

export default Button;
