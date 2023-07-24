import React from 'react';
import { styled } from 'styled-components';

import { HeaderBottom } from './HeaderBottom';
import { HeaderTopLeft } from './HeaderTopLeft';
import { HeaderTopMiddle } from './HeaderTopMiddle';
import { HeaderTopRight } from './HeaderTopRight';

export const HomePageHeader: React.FC = () => {
  return (
    <>
      <HeaderTopContainer>
        <HeaderTopLeftContainer>
          <HeaderTopLeft />
        </HeaderTopLeftContainer>
        <HeaderTopMiddle />
        <HeaderTopRight />
      </HeaderTopContainer>
      <HeaderBottom />
    </>
  );
};

export const HeaderTopContainer = styled.div`
  background-image: url('/static/images/NewAsset/top_panel_bg.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  min-height: 80px;
  height: 80px;
  position: relative;
  z-index: 9999;
  @media only screen and (min-width: 1200px) {
    min-height: 160px;
    height: 160px;
  }
`;

export const HeaderTopLeftContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
`;
