import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--size': (24 /16 ) + 'rem',
    '--border-size': 1 + 'px',
    '--border-size2': 1 ,
    '--font-size': (16 /16 ) + 'rem',
    '--padding': 4+ 'px',
    '--padding-left': 24 + 'px',

  },
  large: {
    '--size': (36 /16 ) + 'rem',
    '--border-size': 2 + 'px',
    '--border-size2': 2 ,
    '--font-size': (18 /16 ) + 'rem',
    '--padding': 8+ 'px',
    '--padding-left': 36 + 'px',
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];

  return <Wrapper  style={styles} >
      <WrapperInput width={width} placeholder={placeholder}>
      
      </WrapperInput>
        <IconWrapper >
          <Icon id={icon} strokeWidth={styles['--border-size2']} size={styles['--font-size']} />
    </IconWrapper>
  </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray500};
`;

const WrapperInput = styled.input`
border: none;
border-bottom: var(--border-size) solid ${COLORS.black};
width: ${props => props.width+'px'};
padding: var(--padding);
padding-left: var(--padding-left);
font-size: var(--font-size);
color: ${COLORS.gray700};
font-weight: 700;

&::placeholder {
  color: ${COLORS.gray500};
  font-weight: 400;
}

&:focus {
  outline: 1px dotted #212121;
  outline: 5px auto -webkit-focus-ring-color;
}

&:hover {
  color: ${COLORS.black};
  &::placeholder {
    color: ${COLORS.black};
  }
}

`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2px;
  margin: auto;
  width: var(--font-size);
  height: var(--font-size);
  pointer-events: none;

  ${WrapperInput}:hover + &{
    color: ${COLORS.black};
  }
`;
export default IconInput;
