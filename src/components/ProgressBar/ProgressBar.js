/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8+'px',
    '--height2': 8+'px',
    '--border-radius': 4 +'px',
  },
  medium: {
    '--height': 12+'px',
    '--height2': 12+'px',
    '--border-radius': 4 +'px',
  },
  large: {
    '--height': 24+'px',
    '--height2': 16+'px',
    '--border-radius': 8 +'px',
    '--padding': 4+'px'
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return <ProgressBarWrapper style={styles} role="progressbar" aria-labelledby="loadinglabel" aria-valuemax="0" aria-valuemin="0" aria-valuenow={value}>
            <VisuallyHidden>{value}%</VisuallyHidden>
            <ProgressBarBack>
              <ProgressBarWrapperFront>
                <ProgressBarFront value = {value}></ProgressBarFront>
              </ProgressBarWrapperFront>
            </ProgressBarBack>
          </ProgressBarWrapper>;
};

const ProgressBarWrapper = styled.div`
width: 370px;
`;

const ProgressBarBack = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const ProgressBarFront = styled.div`
  width: ${props => props.value+'%'};
  height: var(--height2);
  background-color: ${COLORS.primary};
  max-width: 100%;
`;

const ProgressBarWrapperFront = styled.div`
  height: var(--height2);
  overflow: hidden;
  border-radius: 4px;
`;

export default ProgressBar;
