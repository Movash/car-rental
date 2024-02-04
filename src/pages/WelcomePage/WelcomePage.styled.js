import { styled } from 'styled-components';

export const WelcomeCont = styled.div`
  background-color: black;
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
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
`;

export const WelcomeH1 = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

export const WelcomeP = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: var(--white-color);
  border-radius: 12px;
  padding: 12px 50px;
  background-color: var(--sky-blue-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: var(--blue-color);
  }
`;



