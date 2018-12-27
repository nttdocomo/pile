import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  compose, prefixClsProperty, sizeProperty, sizes,
} from '@pile/shared';

const ButtonGroup = ({
  prefixCls, className, children, ...props
}) => {
  const cls = classNames({
    [`${prefixCls}-btn-group`]: true,
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

const enhance = compose(
  sizeProperty([sizes.SMALL, sizes.LARGE]),
  prefixClsProperty,
);

export default enhance(ButtonGroup);
