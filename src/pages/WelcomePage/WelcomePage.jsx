import React from 'react';
import { WelcomeCont, WelcomeH1, WelcomeP } from './WelcomePage.styled';
import { Link } from 'react-router-dom';
import { Button, TextContainer } from 'styles/MainComponents/MainComponents.styled';

const WelcomePage = () => {
  return (
      <WelcomeCont>
        <TextContainer>
          <WelcomeH1>Find the Perfect Car for Your Journey</WelcomeH1>
          <WelcomeP>
            Explore our extensive selection of rental cars and choose the one
            that suits you best. Go to the catalog and make your choice.
          </WelcomeP>
          <Button as={Link} to="/catalog">
            Catalog
          </Button>
        </TextContainer>
      </WelcomeCont>
  );
};

export default WelcomePage;
