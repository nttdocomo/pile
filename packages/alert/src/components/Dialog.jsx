import React, { Component } from 'react';
import Animate from 'rc-animate';
import PropTypes from 'prop-types';
import RenderBox from './renderBox';

function noop() {
}

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    this.getMaskTransitionName = this.getMaskTransitionName.bind(this);
    this.getTransitionName = this.getTransitionName.bind(this);
    this.getTransitionName = this.getTransitionName.bind(this);
    this.getMaskElement = this.getMaskElement.bind(this);
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
    if (this.wrapRef) {
      this.wrapRef.style.display = 'none';
    }
  }

  getMaskTransitionName() {
    const props = this.props;
    let transitionName = props.maskTransitionName;
    const animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = `${props.prefixCls}-${animation}`;
    }
    return transitionName;
  }

  getTransitionName() {
    const props = this.props;
    let transitionName = props.transitionName;
    console.log(transitionName, 'transitionName');
    const animation = props.animation;
    if (!transitionName && animation) {
      transitionName = `${props.prefixCls}-${animation}`;
    }
    return transitionName;
  }

  getMaskElement() {
    const props = this.props;
    let maskElement;
    if (props.mask) {
      const maskTransition = this.getMaskTransitionName();
      maskElement = (
        <RenderBox
          key="mask-element"
          className={`${props.prefixCls}-mask`}
          hiddenClassName={`${props.prefixCls}-mask-hidden`}
          visible={props.visible}
          {...props.maskProps}
        />
      );
      if (maskTransition) {
        maskElement = (
          <Animate
            key="mask"
            showProp="visible"
            transitionAppear
            component=""
            transitionName={maskTransition}
          >
            {maskElement}
          </Animate>
        );
      }
    }
    return maskElement;
  }

    getDialogElement = () => {
      const props = this.props;
      const closable = props.closable;
      const prefixCls = props.prefixCls;
      let footer;
      if (props.footer) {
        footer = (
          <div className={`${prefixCls}-footer`} ref={el => this.footerRef = el}>
            {props.footer}
          </div>
        );
      }
      let header;
      if (props.title) {
        header = (
          <div className={`${prefixCls}-header`} ref={el => this.headerRef = el}>
            <div className={`${prefixCls}-title`}>
              {props.title}
            </div>
          </div>
        );
      }
      let closer;
      if (closable) {
        closer = (
          <button
            onClick={this.close}
            aria-label="Close"
            className={`${prefixCls}-close`}
          >
            <span className={`${prefixCls}-close-x`} />
          </button>);
      }
      const transitionName = this.getTransitionName();
      const dialogElement = (
        <RenderBox
          key="dialog-element"
          role="document"
          ref={el => this.dialogRef = el}
          style={props.style || {}}
          className={`${prefixCls} ${props.className || ''}`}
          visible={props.visible}
        >
          <div className={`${prefixCls}-content`}>
            {closer}
            {header}
            <div
              className={`${prefixCls}-body`}
              style={props.bodyStyle}
              ref={el => this.bodyRef = el}
            >
              {props.children}
            </div>
            {footer}
          </div>
        </RenderBox>
      );
        // https://github.com/react-component/animate 动画库
      return (
        <Animate
          key="dialog"
          showProp="visible"
          onAppear={this.onAnimateAppear}
          onLeave={this.onAnimateLeave}
          transitionName={transitionName}
          component=""
          transitionAppear
        >
          {dialogElement}
        </Animate>
      );
    }

    onAnimateAppear = () => {
      // console.log('动画过度开始')
      document.body.style.overflow = 'hidden';
    }

    onAnimateLeave = () => {
      // console.log('动画结束的时候执行')
      document.body.style.overflow = '';
      if (this.wrapRef) {
        this.wrapRef.style.display = 'none';
      }
      if (this.props.onAnimateLeave) {
        this.props.onAnimateLeave();
      }
      if (this.props.afterClose) {
        this.props.afterClose();
      }
    }

    close = (e) => {
      if (this.props.onClose) {
        this.props.onClose(e);
      }
    }

    onMaskClick = (e) => {
      if (e.target === e.currentTarget) {
        this.close(e);
      }
    }

    render() {
      const { props } = this;
      const { prefixCls, maskClosable } = props;
      return (
        <div>
          {/* 背景层 */}
          {this.getMaskElement()}
          <div
            className={`${prefixCls}-wrap ${props.wrapClassName || ''}`}
            ref={el => this.wrapRef = el}
            onClick={maskClosable ? this.onMaskClick : undefined}
            role="dialog"
            aria-labelledby={props.title}
            {...props.wrapProps}
          >
            {/* 弹出层内容 */}
            {this.getDialogElement()}
          </div>
        </div>
      );
    }
}

Dialog.defaultProps = {
  afterClose: noop,
  className: '',
  mask: true,
  visible: false,
  closable: true,
  maskClosable: true,
  prefixCls: 'pile-dialog',
  onClose: noop,
};
Dialog.propTypes = {
  afterClose: PropTypes.func,
  className: PropTypes.string,
  mask: PropTypes.bool,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  prefixCls: PropTypes.string,
  onClose: PropTypes.func,
};
