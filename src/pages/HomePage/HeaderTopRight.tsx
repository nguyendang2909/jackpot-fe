import React from 'react';
import { styled } from 'styled-components';

export const HeaderTopRight: React.FC = () => {
  return (
    <HeaderTopRightContainer>
      <HeaderTopRightBox>
        <PigContainer>
          <DepositTextContainer>
            <TextCenter>Deposit</TextCenter>
            <DepositDivider />
            <TextCenter>Withdrawal</TextCenter>
          </DepositTextContainer>
          <DepositIcon
            alt="icon_deposit"
            src="/static/images/NewAsset/icon_deposit.png"
          />
        </PigContainer>
        <HeaderTopRightBoxNav>
          <MainpageButton>
            <MainpageButtonContent>
              <MainpageIcon src="/static/images/NewAsset/ico_home.png"></MainpageIcon>
              <MainpageButtonText>Mainpage</MainpageButtonText>
            </MainpageButtonContent>
          </MainpageButton>
          <NavButton>
            <NavButtonIcon src="/static/images/NewAsset/icon_menu.png"></NavButtonIcon>
          </NavButton>
        </HeaderTopRightBoxNav>
      </HeaderTopRightBox>
    </HeaderTopRightContainer>
  );
};

export const HeaderTopRightContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export const HeaderTopRightBox = styled.div`
  gap: 16px;
  padding-right: 12px;
  display: flex;
`;

export const HeaderTopRightBoxNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  @media screen and (min-width: 1600px) {
    gap: 32px;
  }
`;

export const PigContainer = styled.div`
  visibility: hidden;
  @media screen and (min-width: 1200px) {
    visibility: visible;
    position: relative;
    margin-bottom: -16px;
    position: relative;
  }
`;

export const DepositIcon = styled.img`
  height: 150px;
  width: 250px;
  @media screen and (min-width: 1600px) {
    width: 400px;
  }
`;

export const DepositTextContainer = styled.div`
  position: absolute;
  left: 40px;
  top: 42px;
  @media screen and (min-width: 1600px) {
    left: 80px;
  }
`;

export const DepositDivider = styled.div`
  border: 1px solid #f2e260;
  width: 100%;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const MainpageButton = styled.div`
  width: 52px;
  height: 52px;
  background: linear-gradient(#f7da75, #88642d);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f5d474;
  @media screen and (min-width: 1600px) {
    width: 116px;
    height: 116px;
  }
`;

export const MainpageButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainpageIcon = styled.img`
  height: 24px;
  width: 24px;
  @media screen and (min-width: 1600px) {
    width: 48px;
    height: 48px;
  }
`;

export const MainpageButtonText = styled.div`
  font-size: 10px;
  color: black;
  @media screen and (min-width: 1600px) {
    font-size: 20px;
  }
`;

export const NavButton = styled.div``;

export const NavButtonIcon = styled.img`
  height: 68px;
  width: 52px;
`;
