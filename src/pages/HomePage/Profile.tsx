import React from 'react';
import { styled } from 'styled-components';

export const Profile: React.FC = () => {
  return (
    <ProfileBox>
      <AvatarContainer>
        <AvatarBox>
          <ProfileImage src="/static/images/NewAsset/profile_imgtemp7.png" />
          <FrameProfileImage
            alt=""
            src="/static/images/NewAsset/frame_proflie.png"
          />
        </AvatarBox>
      </AvatarContainer>
      <ProfileDescriptionContainer>
        <ProfileDescriptionBox>
          <TypographyDescroptionLevel>
            Level 1 King maker#1
          </TypographyDescroptionLevel>
          <BetContainer>0 / 20 Bets</BetContainer>
        </ProfileDescriptionBox>
      </ProfileDescriptionContainer>
    </ProfileBox>
  );
};

const ProfileBox = styled.div`
  position: relative;
  display: flex;
`;

const AvatarContainer = styled.div`
  margin-left: 24px;
`;

const AvatarBox = styled.div`
  position: relative;
`;

const ProfileDescriptionContainer = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const ProfileDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 4px;
  justify-content: center;
  @media only screen and (min-width: 1600px) {
    padding-left: 12px;
  }
`;

export const BetContainer = styled.div`
  background-color: black;
  border-radius: 100px;
  padding: 4px 16px;
  width: 130px;
  font-size: 16px;
  text-align: center;
  @media only screen and (min-width: 1600px) {
    width: 204px;
  }
`;

const TypographyDescroptionLevel = styled.div`
  font-size: 16px;
`;

const FrameProfileImage = styled('img')(() => ({
  height: '150px',
  position: 'absolute',
  left: '-24px',
  top: '-24px',
}));

const ProfileImage = styled('img')(() => ({
  height: '100px',
}));
