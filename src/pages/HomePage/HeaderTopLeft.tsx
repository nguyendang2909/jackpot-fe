import React from 'react';
import { styled } from 'styled-components';

import { Profile } from './Profile';

export const HeaderTopLeft: React.FC = () => {
  return (
    <>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
      <HeaderTopLeftBox>
        <CoinContainer>
          <CoinIconBox>
            <CoinIcon src="/static/images/NewAsset/icon_coin.png" />
          </CoinIconBox>
          <FlexGrow />
          <CoinTypography>91.50</CoinTypography>
        </CoinContainer>
        <CoinContainer>
          <CoinIconBox>
            <CoinIcon src="/static/images/NewAsset/icon_diamond.png" />
          </CoinIconBox>
          <FlexGrow />
          <CoinTypography>2,082</CoinTypography>
        </CoinContainer>
      </HeaderTopLeftBox>
    </>
  );
};

const HeaderTopLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 12px;
`;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  width: 124px;
  background-color: black;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  padding: 2px 8px;
  @media only screen and (min-width: 1200px) {
    width: 200px;
    padding: 4px 12px;
    border-radius: 100px;
  }
  @media only screen and (min-width: 1600) {
    width: 280px;
    padding: 4px 12px;
    border-radius: 100px;
  }
`;

const CoinIconBox = styled.div``;

const CoinIcon = styled.img`
  height: 20px;
  width: 20px;
  @media only screen and (min-width: 1200px) {
    height: 36px;
    width: 36px;
  }
`;

const CoinTypography = styled.div`
  font-size: 14px;
  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

const ProfileContainer = styled.div`
  display: none;
  @media only screen and (min-width: 1200px) {
    display: block;
  }
`;

const FlexGrow = styled.div`
  flex-grow: 1;
`;
