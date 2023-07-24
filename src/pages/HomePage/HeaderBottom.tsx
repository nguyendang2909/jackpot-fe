import { TypographyOneLine } from 'components/Typography';
import React from 'react';
import { styled } from 'styled-components';

export const HeaderBottom: React.FC = () => {
  return (
    <HeaderBottomContainer>
      <ProfileContainer>
        <ProfileWrapper>
          <FrameProfileImage
            alt=""
            src="/static/images/NewAsset/frame_proflie.png"
          />
          <ProfileImage
            alt=""
            src="/static/images/NewAsset/profile_imgtemp7.png"
          />
          <LevelText>Lvl 1</LevelText>
          <KingMakerText>Kingmaker#1</KingMakerText>
          <BetText>0 / 20 Bets</BetText>
        </ProfileWrapper>
        <PanelGreen>
          <PigImage alt="" src="/static/images/NewAsset/pig.png" />
          <PigCoinImage
            alt="pig_coin"
            src="/static/images/NewAsset/pigcoin_prop.png"
          />
          <DepositTextContainer>
            <DepositText>Deposit / Withdrawal</DepositText>
          </DepositTextContainer>
        </PanelGreen>
      </ProfileContainer>
    </HeaderBottomContainer>
  );
};

export const HeaderBottomContainer = styled.div`
  border-bottom: 2px solid #837756;
  box-shadow: inset 0 -5px 25px -5px #837756;
  background-image: linear-gradient(#01020a, #212227);
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

export const HeaderBottomGrid = styled.div`
  display: flex;
  height: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const HeaderBottomColumnLeft = styled.div`
  width: '100%';
  height: '56px';
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/static/images/NewAsset/img_panel_brown.png');
  background-size: 100% 100%;
`;

export const HeaderBottomColumnRight = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  background-image: url('/static/images/NewAsset/img_panel_green.png');
  background-size: 100% 100%;
`;

const PanelGreen = styled('div')(() => ({
  position: 'relative',
  height: '56px',
  width: '50%',
  backgroundImage: "url('/static/images/NewAsset/img_panel_green.png')",
  backgroundSize: '100% 100%',
  display: 'flex',
}));

const DepositText = styled(TypographyOneLine)(() => ({
  fontSize: '12px',
}));

const DepositTextContainer = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  transform: 'translate(-30px, 0px)',
}));

const PigCoinImage = styled('img')(() => ({
  transform: 'translate(-20px, -14px)',
  height: '60px',
}));

const PigImage = styled('img')(() => ({
  transform: 'translate(0px, -4px)',
  position: 'absolute',
  height: '60px',
  zIndex: 2,
}));

const BetText = styled('div')(() => ({
  position: 'absolute',
  left: '47%',
  top: '53%',
  fontSize: '12px',
}));

const KingMakerText = styled('div')(() => ({
  position: 'absolute',
  left: '50%',
  top: '10%',
  fontSize: '12px',
}));

const LevelText = styled('div')(() => ({
  position: 'absolute',
  left: '32%',
  top: '10%',
  fontSize: '12px',
}));

const ProfileImage = styled('img')(() => ({
  transform: 'translate(5px, 2px)',
  position: 'absolute',
  height: '54px',
}));

const FrameProfileImage = styled('img')(() => ({
  transform: 'translate(-6px, -10px)',
  height: '76px',
  zIndex: 2,
}));

const ProfileWrapper = styled('div')(() => ({
  position: 'relative',
  height: '56px',
  width: '50%',
  minWidth: '50%',
  maxWidth: '50%',
  backgroundImage: "url('/static/images/NewAsset/img_panel_brown.png')",
  backgroundSize: '100% 100%',
  display: 'flex',
}));

const ProfileContainer = styled('div')(() => ({
  display: 'flex',
  paddingTop: '24px',
  paddingBottom: '24px',
}));
