import React from 'react';
import { styled } from 'styled-components';

type FCProps = {
  iconSrc: string;
  title: string;
  notification?: boolean;
};

export const FooterMenuItem: React.FC<FCProps> = ({
  iconSrc,
  title,
  notification,
}) => {
  return (
    <MenuItemContainer>
      <MenuIconButton>
        {!!notification && (
          <NotificationIcon
            alt="notification"
            src="/static/images/NewAsset/notice_dot.png"
          />
        )}
        <MenuIcon src={iconSrc} alt="menu_icon" />
      </MenuIconButton>

      <MenuTitle>{title}</MenuTitle>
    </MenuItemContainer>
  );
};

const MenuIconButton = styled.div`
  position: relative;
  width: 56px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 1200px) {
    width: 124px;
  }
`;

const MenuIcon = styled.img`
  height: 100%;
  width: 100%;
`;

export const MenuItemContainer = styled.div`
  text-align: center;
  flex-grow: 1;
`;

export const NotificationIcon = styled.img`
  position: absolute;
  right: 0;
  width: 16px;
  margin-top: 20%;
  /* transform: translate(0px, 10px); */
  @media only screen and (min-width: 1200px) {
    width: 40px;
  }
`;

const MenuTitle = styled.div`
  font-size: 14px;
  @media only screen and (min-width: 1200px) {
    font-size: 18px;
    line-height: 40px;
  }
`;
