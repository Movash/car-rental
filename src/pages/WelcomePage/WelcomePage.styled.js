import { styled } from 'styled-components';

export const WelcomeCont = styled.div`
  background-color: var(--black-color);
  height: 100vh;
  background-image: url(https://cdn.sanity.io/images/tlr8oxjg/production/af933c11c016582cc71c3234af057c24a47a9e92-1198x672.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black-color);
    opacity: 0.5;
    z-index: 1;
  }
`;

export const WelcomeH1 = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

export const WelcomeP = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;



