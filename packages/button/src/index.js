import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { commonSizes, sizes } from '@pile/shared';
import { IfComponent } from '@pile/condition';

const Button = ({
  children, className, size, type, line,
  icon, loading, nativeType, block, text, href, ...props
}) => {
  const cls = classNames({
    'pile-button': true,
    [`pile-button--${type}`]: true,
    [className]: className,
    [`is-${size}`]: size,
    'is-block': block,
    /* eslint-disable react/destructuring-assignment */
    'is-disabled': props.disabled,
    /* eslint-enable react/destructuring-assignment */
    'is-line': line,
    'is-text': text,
  });

  const Component = href ? 'a' : 'button';
  const componentType = href ? { href } : { type: nativeType };
  const iconType = loading ? 'loading-snaker' : icon;
  const isIconType = typeof iconType === 'string';
  const iconCls = classNames({ [size]: size, 'pile-button-icon': true });
  const iconSelfCls = icon && icon.props && icon.props.className;

  return (
    <Component {...componentType} className={cls} {...props}>
      <IfComponent when={isIconType}>
        {() => <i className={`pile-icon-${iconType} ${iconCls}`} />}
      </IfComponent>
      <IfComponent when={!isIconType && icon !== null}>
        {() => React.cloneElement(icon,
          {
            className: classNames({
              [iconSelfCls]: iconSelfCls,
              [iconCls]: iconCls,
            }),
          })}
      </IfComponent>
      <span className="pile-button-label">{children}</span>
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  nativeType: PropTypes.oneOf(['button', 'submit', 'reset']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  line: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  loading: PropTypes.bool,
  text: PropTypes.bool,
  href: PropTypes.string,
};

Button.defaultProps = {
  type: 'default',
  nativeType: 'button',
  block: false,
  disabled: false,
  line: false,
  icon: null,
  loading: false,
  text: false,
  href: null,
};

export default commonSizes([sizes.SMALL, sizes.LARGE], Button);
