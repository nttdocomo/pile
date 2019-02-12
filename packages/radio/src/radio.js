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

const enhanced = composed(
  withState('value', 'updateValue', ''),
  withState('id', 'updateId', ''),
  withHandlers({
    onChange: props => event => {
      props.updateValue(event.target.value)
    }
  })
)


const Radio = enhanced(({
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

// Button.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
//   nativeType: PropTypes.oneOf(['button', 'submit', 'reset']),
//   block: PropTypes.bool,
//   disabled: PropTypes.bool,
//   line: PropTypes.bool,
//   icon: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.node,
//   ]),
//   loading: PropTypes.bool,
//   text: PropTypes.bool,
//   href: PropTypes.string,
//   radius: PropTypes.bool,
//   circle: PropTypes.bool,
// };

// Button.defaultProps = {
//   type: 'default',
//   nativeType: 'button',
//   block: false,
//   disabled: false,
//   line: false,
//   icon: null,
//   loading: false,
//   text: false,
//   href: null,
//   radius: true,
//   circle: false,
// };

const enhance = compose(
  sizeProperty([sizes.SMALL, sizes.LARGE]),
  prefixClsProperty,
);

export default enhance(Radio);