import { styled } from 'styled-components';

export const TextContainer = styled.div`
  text-align: center;
  width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white-color);
  z-index: 2;
`;

export const Button = styled.button`
  font-family: 'ManropeSemiBold';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: var(--white-color);
  border-radius: 12px;
  padding: 12px 50px;
  background-color: var(--sky-blue-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.searchPadding {
    padding: 14px 44px;
  }
  &:hover,
  &:focus {
    background-color: var(--blue-color);
  }
`;

export const AdvertsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
  min-width: 274px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AdvertsItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--black-opacity-50-color);

  &:not(:first-child)::before {
    content: '|';
    margin-right: 6px;
  }
  &:first-child {
    margin-left: 0;
  }
`;

export const ModelSpan = styled.span`
  color: var(--sky-blue-color);
`;

export const ListWrap = styled.ul`
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
`;
