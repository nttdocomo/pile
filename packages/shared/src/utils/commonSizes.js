import PropTypes from 'prop-types';

/* eslint-disable no-param-reassign */
const commonSizes = (sizes, defaultSize, Component) => {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = null;
  }

  Component.propTypes = {
    ...Component.propTypes,
    size: PropTypes.oneOf(sizes),
  };

  if (!Component.defaultProps) {
    Component.defaultProps = {};
  }

  Component.defaultProps.size = defaultSize;
  return Component;
};

export default commonSizes;
