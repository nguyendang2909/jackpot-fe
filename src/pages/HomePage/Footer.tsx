import { FooterDailyRewardIcon } from 'containers/Icon/DailyRewardIcon';
import { FooterMenuItem } from 'containers/MenuItem/FooterMenuItem';
import React from 'react';
import { styled } from 'styled-components';

export const HomePageFooter: React.FC = () => {
  return (
    <>
      <FooterDailyRewardIconContainer>
        <FooterDailyRewardIcon />
      </FooterDailyRewardIconContainer>
      <FooterMenuContainer>
        <FooterMenuList>
          <FooterMenuItem
            iconSrc="/static/images/footer/icon_shop.png"
            title="KM Shop"
          />
          <FooterMenuItem
            iconSrc="/static/images/footer/icon_flag.png"
            title="Mission"
            notification={true}
          />
          <FooterMenuItem
            iconSrc="/static/images/footer/icon_controller.png"
            title="Mini Game"
          />
          <FooterDailyRewardBottomContainer></FooterDailyRewardBottomContainer>
          <FooterMenuItem
            iconSrc="/static/images/footer/icon_update.png"
            title="News"
          />
          <FooterMenuItem
            iconSrc="/static/images/footer/icon_mail.png"
            title="Inbox"
          />
          <FooterMenuItem
            iconSrc="/static/images/footer/icon_ranking_soon.png"
            title="Ranking"
          />
        </FooterMenuList>
      </FooterMenuContainer>
    </>
  );
};

const FooterDailyRewardIconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterDailyRewardBottomContainer = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 380px;
  }
`;

const FooterMenuContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  position: relative;
  @media only screen and (min-width: 1200px) {
    padding-bottom: 20px;
  }
`;

export const FlexGrow = styled.div`
  flex-grow: 1;
`;

export const FooterMenuList = styled.div`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
`;
