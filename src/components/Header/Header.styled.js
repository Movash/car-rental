import { styled } from 'styled-components';

export const Nav = styled('nav')(() => {
  return {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'var(--sky-blue-color)',
    zIndex: '2',
    '& div': {
      '& a': {
        color: 'var(--white-color)',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        marginLeft: 40,
        transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&.active': {
          color: 'var(--active-color)',
        },
        '&:hover, &:focus': {
          color: 'var(--active-color)',
        },
      },
    },
  };
});
