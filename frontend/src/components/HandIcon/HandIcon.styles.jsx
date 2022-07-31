import styled from 'styled-components';

export const Root = styled.svg`
  fill: ${props => props.theme.colors.secondary};
  width: 4rem;
  height: auto;
  display: block;
  ${({ $isFlipped }) => $isFlipped && 'transform: scaleX(-1);'}
`;
