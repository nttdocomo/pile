import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import './style/mobile.less';

const CAN_USE_DOM = !!(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export default class DialogWrap extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate({ visible }) {
    return !!(this.props.visible || visible);
  }

  componentWillUnmount() {
    this.removeContainer();
  }

  saveRef = (node) => {
    this._component = node;
  }

  getComponent = (visible) => {
    const props = { ...this.props };
    return (
      <Dialog {...props} visible={visible} onAnimateLeave={this.removeContainer} ref={this.saveRef} />
    );
  }

  removeContainer = () => {
    if (this.container) {
      this.container.parentNode.removeChild(this.container);
      this.container = null;
    }
  }

  getContainer = () => {
    if (!this.container) {
      const container = document.createElement('div');
      const containerId = `${this.props.prefixCls}-container-${(new Date().getTime())}`;
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
      this.container = container;
    }
    return this.container;
  }


  render() {
    if (!CAN_USE_DOM) {
      return null;
    }

    const { visible } = this.props;
    if (visible || this._component) {
      return ReactDOM.createPortal(this.getComponent(visible), this.getContainer());
    }
    return null;
  }
}
DialogWrap.defaultProps = {
  visible: false,
  prefixCls: 'pile-modal',
  onClose: () => { },
};
DialogWrap.propTypes = {
  visible: PropTypes.bool,
  prefixCls: PropTypes.string,
  onClose: PropTypes.func,
};
