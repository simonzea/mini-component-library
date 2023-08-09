import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayxedValue = getDisplayedValue(value, children);

  return (
    <SelectDiv>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
        <SelectWrapperDiv>{displayxedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </SelectWrapperDiv>
    </SelectDiv>
  );
};

const SelectDiv = styled.div`
  position: relative;
  width: max-content;
`;

const SelectWrapper = styled.select`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    opacity: 0%;
`;

const SelectWrapperDiv = styled.div`
    background-color: ${COLORS.transparentGray15};
    font-size: 1rem;
    border-radius: 8px;
    padding: 12px 52px 12px 16px;
    color: ${COLORS.gray700};
    border: none;

    ${SelectWrapper}:focus + & {
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
    }

    ${SelectWrapper}:hover + & {
      color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;



export default Select;
