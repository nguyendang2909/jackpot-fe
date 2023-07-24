import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { styled } from 'styled-components';

import { HomePageFooter } from './Footer';
import { HomePageHeader } from './Header';
import { HomePageBody } from './HomePageBody';
import {
  BackgroundContainer,
  BodyContainer,
  FooterContainer,
  FooterSpace,
  HeaderContainer,
  HeaderSpace,
  RootContainer,
} from './styles/index.styled';

export const Main = styled('main')(() => ({}));

export function HomePage() {
  return (
    <>
      <BackgroundContainer />
      <RootContainer>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Homepage" />
        </Helmet>
        <HeaderContainer>
          <HomePageHeader />
        </HeaderContainer>
        <HeaderSpace />

        <BodyContainer>
          <HomePageBody />
        </BodyContainer>

        <FooterSpace />
        <FooterContainer>
          <HomePageFooter />
        </FooterContainer>
      </RootContainer>
    </>
  );
}
