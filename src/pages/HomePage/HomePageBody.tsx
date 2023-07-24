import {
  faClockRotateLeft,
  faHeart,
  faHome,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { styled } from 'styled-components';

import { CardList } from './CardList';

export const HomePageBody: React.FC = () => {
  return (
    <>
      <PageBodyNavContainerBox>
        <PageBodyNavBox>
          <PageBodyNavMain>
            <div>
              <FontAwesomeIcon color="#79B37C" size="lg" icon={faHome} />
            </div>

            <div>
              <FontAwesomeIcon size="lg" icon={faHeart} />
            </div>
            <div>
              <FontAwesomeIcon size="lg" icon={faClockRotateLeft} />
            </div>
          </PageBodyNavMain>
          <SearchButton>
            <FontAwesomeIcon size="lg" icon={faSearch} />
          </SearchButton>
        </PageBodyNavBox>
      </PageBodyNavContainerBox>

      <CardListContainer>
        <CardList />
      </CardListContainer>
    </>
  );
};

const PageBodyNavContainerBox = styled.div`
  display: flex;
  justify-content: center;
`;

const PageBodyNavBox = styled.div`
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  background-color: black;
  border-radius: 9999px;
  margin-top: 24px;
  gap: 16px;
`;

const PageBodyNavMain = styled.div`
  display: flex;
  gap: 6px;
  padding: 4px 0px;
`;

export const CardListContainer = styled.div`
  margin-top: 16px;
  padding: 0px 12px;
`;

const SearchButton = styled.div`
  border-radius: 999px;
  height: 100%;
  background-color: #b1781e;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
