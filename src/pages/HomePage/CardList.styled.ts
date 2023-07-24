import { styled } from 'styled-components';

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and (min-width: 1200px) {
    display: inline-block;
    overflow-x: scroll;
    white-space: nowrap;
    width: 100%;
  }
`;

export const CardListItem = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 33%;
  z-index: -1;
  @media only screen and (min-width: 1200px) {
    width: 300px;
    margin-right: 100px;
    display: inline-block;
  }
`;

export const HeartIconBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const HeartIcon = styled.img`
  width: 28px;
  @media only screen and (min-width: 1200px) {
    width: 52px;
  }
`;

export const CardIcon = styled.img`
  width: 100%;
`;
