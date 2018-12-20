import * as React from 'react';
import * as PropTypes from 'prop-types';

const Icon = ({ type }) => (
  <i className={`pile-icon-${type}`} />
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
