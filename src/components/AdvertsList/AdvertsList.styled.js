import styled from 'styled-components';

export const LoadButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: var(--sky-blue-color);
  background-color: var(--white-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: var(--blue-color);
  }
`;
