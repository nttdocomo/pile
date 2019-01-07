import React from 'react';
import ReactDOM from 'react-dom';
// 普通版模式
const IS_REACT_16 = !!ReactDOM.createPortal;
class NewPortal extends React.Component {
  constructor(props) {
    super(props);
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }

  render() {
    const { children } = this.props;
    if (!IS_REACT_16) {
      return ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        children,
        this.node,
      );
    }
    return ReactDOM.createPortal(children, this.node);
  }
}

export default NewPortal;
