import styled from 'styled-components';

export const Root = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  margin-left: 0.5rem;
`;

export const Spinner = styled.span`
  display: inline-block;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-top-color: transparent;
  border-radius: 100%;
  height: 1em;
  width: 1em;
  vertical-align: text-top;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
