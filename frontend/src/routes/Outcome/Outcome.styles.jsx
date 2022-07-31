import styled, { css } from 'styled-components';

export const Outcome = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Message = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${({ theme }) => theme.media.large`
    flex-direction: row;
  `}
`;

export const Choice = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.div`
  margin-top: 1rem;
`;

export const Guess = styled.div`
  margin: 0 auto 2rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem 2rem;
  text-align: center;
  position: relative;
  font-size: 2rem;
  width: 12rem;

  &:before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
  }

  &:before {
    border: 0.75rem solid ${({ theme }) => theme.colors.secondary};
    border-left-color: transparent;
    border-bottom-color: transparent;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  ${({ $isFlipped, theme }) =>
    $isFlipped &&
    css`
      &:before {
        border-left-color: ${theme.colors.secondary};
        border-right-color: transparent;
        right: auto;
        left: 100%;
      }
    `}
`;

export const Summary = styled.div`
  font-size: 0.75rem;
`;

export const Actions = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
