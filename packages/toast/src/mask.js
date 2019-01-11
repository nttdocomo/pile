// @flow
/**
 * @author wutaosusan
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  prefixClsProperty,
} from '@pile/shared';

const Mask = ({
  show, hasAnimate, prefixCls, className, clickClose,
}) => {
  const cls = classNames({
    [`${prefixCls}-mask`]: true,
    'is-show': show && !hasAnimate,
    'is-hidden': !show && !hasAnimate,
    'is-animate-show': show && hasAnimate,
    'is-animate-hidden': !show && hasAnimate,
    [className]: className,
  });

  const clickCloseFn = () => {
    if (clickClose) {
      clickClose();
    }
  };
  return (<div className={cls} onClick={clickCloseFn} />);
};

Mask.propTypes = {
  show: PropTypes.bool,
  hasAnimate: PropTypes.bool,
  className: PropTypes.string,
  clickClose: PropTypes.func,
};

Mask.defaultProps = {
  show: true,
  hasAnimate: false,
  className: '',
  clickClose: null,
};

export default prefixClsProperty(Mask);
