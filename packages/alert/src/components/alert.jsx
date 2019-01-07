import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

export default function alert(title, message, actions = [{ text: '确定' }]) {
  let closed = false;

  if (!title && !message) {
    // 有信息 -- 不执行关闭函数
    return {
      close: () => {},
    };
  }
  const div = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    ReactDOM.unmountComponentAtNode(div); // 销毁指定容器内的所有React节点
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const footer = actions.map((button) => {
    // 按钮组执行函数
    const orginPress = button.onPress || function () {};

    button.onPress = () => {
      if (closed) {
        return;
      }
      const res = orginPress();
      if (res && res.then) {
        res
          .then(() => {
            closed = true;
            close();
          })
          .catch(() => {});
      } else {
        closed = true;
        close();
      }
    };
    return button;
  });

  const prefixCls = 'pile-modal';
  ReactDOM.render(
    <Modal
      visible
      title={title}
      transitionName="pile-fade"
      closable={false}
      maskClosable={false}
      footer={footer}
      maskTransitionName="pile-fade"
    >
      <div className={`${prefixCls}-alert-content`}>{message}</div>
    </Modal>,
    div,
  );

  return {
    close,
  };
}

/* ----API
visible  对话框是否可见	Boolean	false
onClose  点击 x 或 mask 回调	(): void	无
title (only transparent)	标题	React.Element	无
closable	是否显示关闭按钮	Boolean	true
maskClosable (only transparent)	点击蒙层是否允许关闭	Boolean	true
footer (only not transparent)	底部内容	Array [{text, onpress}]	[]
transparent	是否弹窗模式	Boolean	false
wrapClassName 新增弹窗样式 String

==========================================================

Modal.alert(title, message, actions?) ( 适用平台：WEB、React-Native )#
参数	说明	类型	默认值
title	标题	String 或 React.Element	无
message	提示信息	String 或 React.Element	无
actions	按钮组, [{text, onpress, style}]	Array	无

*/
