import styled from 'styled-components';

export const Container = styled.div``;

export const ModalStyles = {
  overlay: {
    backgroundColor: 'var(--black-opacity-50-color)',
    zIndex: 3,
  },
  content: {
    borderRadius: '24px',
    width: '541px',
    height: '752px',
    padding: '40px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ButtonCloseModal = styled.button`
  display: flex;
  position: absolute;
  top: 16px;
  right: 11px;
  cursor: pointer;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #121417;
`;

export const ModalImg = styled.img`
  border-radius: 14px;
  width: 100%;
  height: 248px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ModalMainDescr = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
  margin-bottom: 8px;
`;

export const ModalCarDescr = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 14px;
`;

export const Heading3 = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-bottom: 8px;
`;

export const ModalConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ModalConditionItem = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;
  border-radius: 35px;
  padding: 7px 14px;
  background: #f9f9f9;
`;

export const ModalSpan = styled.span`
  font-weight: 600;
  color: #3470ff;
`;