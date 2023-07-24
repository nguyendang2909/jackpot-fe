import React from 'react';
import { styled } from 'styled-components';

export const HeaderTopMiddle: React.FC = () => {
  return (
    <HeaderTopMiddleContainer>
      <JackpotNumber>360,146,334</JackpotNumber>
      <JackpotText>THB</JackpotText>
    </HeaderTopMiddleContainer>
  );
};

export const HeaderTopMiddleContainer = styled.div`
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 30px;
  color: #4e2506;
  text-shadow: 1px 1px 1px #fff93a, 3px 3px 5px #fdfaf1;
  @media screen and (min-width: 1200px) {
    top: 70px;
  }
`;

export const JackpotNumber = styled.div`
  font-size: 24px;
  line-height: 24px;
  @media screen and (min-width: 1200px) {
    font-size: 52px;
    line-height: 52px;
  }
`;

export const JackpotText = styled.div`
  font-size: 14px;
  line-height: 14px;
  @media screen and (min-width: 1200px) {
    font-size: 28px;
    line-height: 28px;
  }
`;
