import styled from 'styled-components';

export const Root = styled.svg`
  fill: ${props => props.theme.colors.secondary};
  width: 4rem;
  height: auto;
  display: block;

  ${({ theme }) => theme.media.large`
    width: 8rem;
  `}
`;
