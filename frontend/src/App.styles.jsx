import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 50rem;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0 4rem 8rem -2rem, rgba(0, 0, 0, 0.3) 0 3rem 6rem -2rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const Link = styled.a`
  opacity: 0.25;

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      text-decoration: none;
      pointer-events: none;
    `}
`;
