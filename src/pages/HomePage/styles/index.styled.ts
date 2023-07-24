import { styled } from 'styled-components';

export const BackgroundContainer = styled.div`
  background-image: url('/static/images/NewAsset/bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  z-index: -1;
  position: fixed;
`;

export const RootContainer = styled.div`
  /* background-position: center; */
  color: white;
  height: 100%;
  min-height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* overflow: auto; */
`;

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 200px;
  top: 0;
  left: 0;
  right: 0;
`;

export const HeaderSpace = styled.div`
  height: 180px;
  @media only screen and (min-width: 1200px) {
    height: 160px;
  }
`;

export const BodyContainer = styled.main`
  top: 200px;
  bottom: 200px;
  left: 0px;
  right: 0px;
  overflow: auto;
`;

export const FooterContainer = styled.footer`
  background-image: url('/static/images/footer/nav_bot_panel_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 188px;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  @media only screen and (min-width: 1200px) {
    height: 200px;
    background-size: 100% 100%;
  }
`;

export const FooterSpace = styled.div`
  min-height: 180px;
  height: 180px;
  @media only screen and (min-width: 1200px) {
    min-height: 160px;
    height: 160px;
  }
`;
