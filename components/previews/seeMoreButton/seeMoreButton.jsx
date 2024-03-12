import TransitionScroll from 'react-transition-scroll';
import { baseStyle, hiddenStyle } from '../../../lib/utils';
import * as PropTypes from 'prop-types';
import React from 'react';

function SeeMoreButton({ onClick }) {
  return (
    <TransitionScroll baseStyle={baseStyle} hiddenStyle={hiddenStyle} className="flex justify-center">
      <button className="button" onClick={onClick}>
        See more...
      </button>
    </TransitionScroll>
  );
}

SeeMoreButton.propTypes = { onClick: PropTypes.func };

export default SeeMoreButton;
