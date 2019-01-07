import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RenderBox extends Component {
  static propTypes = {
    children: PropTypes.any,
    visible: PropTypes.bool,
  }

  static defaultProps = {
    visible: true,
  }

  componentWillUnmount() {
    if (this.props.end) {
      this.props.end();
    }
  }

  render() {
    const className = this.props.className;
    const props = { ...this.props };
    delete props.hiddenClassName;
    delete props.visible;
    props.className = className;
    return <div {...props}>{props.children}</div>;
  }
}
