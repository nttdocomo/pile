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
  show, hasAnimate, prefixCls, className,
}) => {
  const cls = classNames({
    [`${prefixCls}-mask`]: true,
    [`${prefixCls}-mask-is-show`]: show && !hasAnimate,
    [`${prefixCls}-mask-is-hidden`]: !show && !hasAnimate,
    [`${prefixCls}-mask--animate-is-show`]: show && hasAnimate,
    [`${prefixCls}-mask--animate-is-hidden`]: !show && hasAnimate,
    [className]: className,
  });
  return (<div className={cls} />);
};

Mask.propTypes = {
  show: PropTypes.bool,
  hasAnimate: PropTypes.bool,
  className: PropTypes.string,
};

Mask.defaultProps = {
  show: false,
  hasAnimate: false,
  className: '',
};

// type PropTypes = {
//     show? : boolean,
//     clickFn? : Function
// }

export default Mask;
