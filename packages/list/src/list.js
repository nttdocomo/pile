import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  compose,
  prefixClsProperty,
  sizeProperty,
  sizes,
} from '@pile/shared';
import { IfComponent } from '@pile/condition';
import { compose as composed, withState, withHandlers } from 'recompose'

const List = enhanced(({
  prefixCls, className, size, value, onChange,
  ...props
}) => {
  const cls = classNames({
    [`${prefixCls}-radio`]: true,
    [className]: className,
    [`is-${size}`]: size,
  });

  return (
    <div className={cls} onClick={onChange}>
      <label className="label" htmlFor={props.id}>
        <span id={props.id} className={classNames('icon', props.radioType)} />
        {props.label + '12344'}
      </label>
    </div>)
})

export default enhance(List);