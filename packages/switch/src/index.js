import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { compose, prefixClsProperty } from '@pile/shared';

class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.getMinusedSize = this.getMinusedSize.bind(this)
    const { checked, disabled } = props
    this.state = {
      checked: !!checked,
      disabled: !!disabled,
    }
  }

  onClick (e) {
    let { checked, disabled } = this.state
    if (disabled) {
      return
    }
    checked = !checked
    this.props.onChange(checked)
    this.setState({
      checked
    })
  }

  /**
   * 将 CSS 长度单位减去相应数值并转换
   * 如 getMinusedSize(1) => 1px
   * 如 getMinusedSize(3, 1) => 2px
   * @param {*} size 
   * @param {*} minusNum 
   */
  getMinusedSize (size, minusNum = 0) {
    if (typeof size === 'number') {
      return size - minusNum + 'px'
    }
    if (typeof size !== "string") {
      return JSON.stringify(size)
    }
    const reg = /\d+/
    const transedSize = size.replace(reg, (matchNum) => {
      return Number(matchNum) - minusNum
    })
    // 如果输入了非数字字符串，则直接 return
    if (!/^\d+$/.test(size)) {
      return transedSize
    }
    return transedSize + 'px'
  }

  render() {
    let {
      prefixCls, checkedColor,
      name, color, width, height
    } = this.props
    const { checked, disabled } = this.state

    const transedWidth = this.getMinusedSize(width)
    const transedHeight = this.getMinusedSize(height)
    const minusedHeight = this.getMinusedSize(height, 2)
    const borderRadius = transedHeight

    const divWrapCSS = classnames({
      [`${prefixCls}-switch--wrap`]: true,
      isDisabled: disabled,
    })

    const divWrapStyle = {
      backgroundColor: checked ? checkedColor : color,
      width: transedWidth,
      height: transedHeight,
      borderRadius,
    }

    const divInnerStyle = {
      width: minusedHeight,
      height: minusedHeight,
      borderRadius: minusedHeight,
      border: checked ? `1px solid ${checkedColor}` : `1px solid ${color}`,
      left: !checked ? '1px' : '100%',
      marginLeft: !checked ? 0 : '-' + this.getMinusedSize(height, 1),
    }

    return (
      <div className={divWrapCSS} style={divWrapStyle} onClick={this.onClick}>
        <input type="checkbox" name={name} />
        <div style={divInnerStyle}></div>
      </div>
    )
  }
}

Switch.defaultProps = {
  checked: false,
  disabled: false,
  name: '',
  color: '#ccc',
  checkedColor: '#343c5c',
  width: '50px',
  height: '30px',
  onChange: () => {},
}

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
}

const enhance = compose(
  prefixClsProperty,
);

export default enhance(Switch);