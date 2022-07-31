import styled from 'styled-components';

export const Root = styled.div`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const Account = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;

  ${({ theme }) => theme.media.large`
    margin-left: auto;
  `}
`;

export const Balance = styled.div`
  margin-right: 1rem;
`;
