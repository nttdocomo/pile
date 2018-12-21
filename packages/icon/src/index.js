import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({
  type, size, className, ...props
}) => {
  const cls = classNames({
    [`pile-icon-${type}`]: true,
    [className]: className,
    [size]: size,
  });

  return (
    <i className={cls} {...props} />
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  /* eslint-disable react/require-default-props */
  size: PropTypes.oneOf(['small', 'large']),
  /* eslint-enable react/require-default-props */
};

export default Icon;
