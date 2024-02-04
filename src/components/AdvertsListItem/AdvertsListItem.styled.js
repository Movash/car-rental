import styled from 'styled-components';

export const AdvertsCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
  img {
    border-radius: 14px;
    height: 268px;
    object-fit: cover;
    margin-bottom: 14px;
  }
`;

export const SvgHeart = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
  fill: ${({ $active }) =>
    $active
      ? 'var(--sky-blue-color)'
      : 'var(--white-color)'};
`;

export const AdvertsContFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const MainDescr = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const AdvertsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 4px;
  min-width: 274px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AdvertsItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);

  &:not(:first-child)::before {
    content: '|';
    margin-right: 6px;
  }
  &:first-child {
    margin-left: 0;
  }
`;

export const ModelSpan = styled.span`
  color: #3470ff;
`;
