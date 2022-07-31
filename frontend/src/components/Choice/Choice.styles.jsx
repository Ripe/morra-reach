import styled from 'styled-components';

export const Root = styled.div`
  margin-bottom: 2rem;
`;

export const Hands = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  justify-content: space-between;

  ${({ theme }) => theme.media.large`
    grid-template-columns: repeat(6, 1fr);
  `}
`;

export const Hand = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    opacity: 0.25;
    transition: all linear 200ms;
    fill: ${props => props.theme.colors.secondary};
  }

  input:checked + svg {
    opacity: 1;
  }
`;

export const Label = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-weight: bold;
  justify-content: space-between;
`;
