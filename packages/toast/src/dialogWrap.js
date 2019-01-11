import * as React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const IS_REACT_16 = !!ReactDOM.createPortal;

class DialogWrap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.visible) {
      this.componentDidUpdate();
    }
  }

  componentDidUpdate() {
    if (!IS_REACT_16 && this.props.visible) {
      this.renderDialog(this.props.visible);
    }
  }

  componentWillUnmount() {
    if (this.props.visible) {
      if (!IS_REACT_16) {
        this.renderDialog(false);
      } else {
        // TODO for react@16 createPortal animation
        this.removeContainer();
      }
    } else {
      this.removeContainer();
    }
  }

  getContainer() {
    if (!this.container) {
      const container = document.createElement('div');
      const containerId = `pile-container-${(new Date().getTime())}`;
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
      this.container = container;
    }
    return this.container;
  }

  getComponent() {
    const props = this.props;

    return React.cloneElement(props.children, {
      onAnimateLeave: this.removeContainer.bind(this), ...props,
    });
  }

  removeContainer() {
    if (this.container) {
      if (!IS_REACT_16) {
        ReactDOM.unmountComponentAtNode(this.container);
      }
      this.container.parentNode.removeChild(this.container);
      this.container = null;
      const { onClose } = this.props;
      if (onClose) {
        onClose();
      }
    }
  }

  renderDialog() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.getComponent(),
      this.getContainer(),
    );
  }

  render() {
    const { visible } = this.props;
    if (IS_REACT_16 && visible) {
      return ReactDOM.createPortal(this.getComponent(), this.getContainer());
    }
    return null;
  }
}

export default DialogWrap;
