import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { commonSizes, sizes } from '@pile/shared';

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
};

export default commonSizes([sizes.SMALL, sizes.LARGE], Icon);
