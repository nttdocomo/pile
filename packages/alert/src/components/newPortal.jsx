import React from 'react';
import ReactDOM from 'react-dom';

class NewPortal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.parentNode.removeChild(this.container);
      this.container = null;
    }
  }

  getContainer = () => {
    if (!this.container) {
      const container = document.createElement('div');
      const containerId = `pile-container-${(new Date().getTime())}`;
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
      this.container = container;
    }
    return this.container;
  }

  render() {
    const { children, visible } = this.props;
    if (visible) {
      return ReactDOM.createPortal(children, this.getContainer());
    }
    return null;
  }
}

export default NewPortal;
