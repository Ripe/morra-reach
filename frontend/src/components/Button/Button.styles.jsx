import styled from 'styled-components';
import { rgba } from 'polished';

export const Root = styled.button`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  background: none;
  border: 2px solid;

  &:not(:disabled):hover {
    background-color: ${props => rgba(props.theme.colors.secondary, 0.15)};
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 4px;
  }

  &:focus-visible {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
