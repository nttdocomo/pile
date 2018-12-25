import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { commonSizes, sizes } from '@pile/shared';

const ButtonGroup = ({ className, children, ...props }) => {
  const cls = classNames({
    'pile-button-group': true,
    [className]: className,
  });
  return (
    <div className={cls} {...props}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  block: PropTypes.bool,
  divide: PropTypes.bool,
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  className: null,
  block: false,
  divide: false,
  vertical: false,
};

export default commonSizes([sizes.SMALL, sizes.LARGE], ButtonGroup);
