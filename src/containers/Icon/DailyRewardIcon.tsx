import React from 'react';
import { styled } from 'styled-components';

export const FooterDailyRewardIcon: React.FC = () => {
  return (
    <>
      <DailyRewardIconBox>
        <DBackImageWrapper>
          <DBackImage src="/static/images/footer/d_back.png" alt="" />
        </DBackImageWrapper>
        <NoticeDotImageWrapper>
          <NoticeDotImage
            src="/static/images/NewAsset/notice_dot.png"
            alt="notice_dot"
          />
        </NoticeDotImageWrapper>
        <DGemImageWrapper>
          <DGemImage src="/static/images/footer/d_gem.png" alt="" />
        </DGemImageWrapper>

        <DFrontImageWrapper>
          <DFrontImage src="/static/images/footer/d_front.png" alt="d_front" />
        </DFrontImageWrapper>
      </DailyRewardIconBox>
    </>
  );
};

const DailyRewardIconBox = styled.div`
  text-align: center;
  position: relative;
  width: 200px;
  @media only screen and (min-width: 1200px) {
    width: 380px;
    top: 30px;
  }
`;

const DBackImageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -20px;
  z-index: 1;
`;

const DBackImage = styled.img`
  width: 120px;
  @media only screen and (min-width: 1200px) {
    width: 216px;
  }
`;

const NoticeDotImageWrapper = styled.div`
  position: absolute;
  left: 0px;
  right: -85px;
  top: -15px;
  z-index: 1;
  @media only screen and (min-width: 1200px) {
    right: -150px;
    top: -4px;
  }
`;

const NoticeDotImage = styled.img`
  width: 20px;
  @media only screen and (min-width: 1200px) {
    width: 44px;
  }
`;

const DFrontImage = styled.img`
  width: 192px;
  @media only screen and (min-width: 1200px) {
    width: 364px;
  }
`;

const DFrontImageWrapper = styled.div`
  z-index: 3;
  top: 30px;
  position: absolute;
  left: 0;
  right: 0;
  @media only screen and (min-width: 1200px) {
    top: 68px;
  }
`;

const DGemImageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
  z-index: 2;
  @media only screen and (min-width: 1200px) {
  }
`;

const DGemImage = styled.img`
  width: 200px;
  @media only screen and (min-width: 1200px) {
    width: 340px;
  }
`;
