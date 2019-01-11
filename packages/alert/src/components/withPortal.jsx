import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 高级模式
export default function withPortal(WrappedComponent) {
  return class HOC extends Component {
    render() {
      if (!this.node) {
        this.node = document.createElement('div');
        this.node.setAttribute('id', `${this.props.prefixCls}-container-${(new Date().getTime())}`);
        document.body.appendChild(this.node);
      }
      return ReactDOM.createPortal(
        <WrappedComponent {...this.props} />,
        this.node,
      );
    }
  };
}

/*
class NewPortal extends React.Component {
  constructor(props) {
    super(props)
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      children,
      this.node,
    );
  }
}
*/
