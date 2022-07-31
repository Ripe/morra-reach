import styled from 'styled-components';

export const Root = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 1rem;
  font-weight: bold;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: ${props => props.theme.colors.secondary};
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  display: block;
  height: 2.5rem;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};

  &[disabled],
  &[readonly] {
    background-color: transparent;
  }

  &[type='range'] {
    appearance: none;
    width: 100%;
    height: 0.5rem;
    margin: 0;
    padding: 0;
    border-radius: 0.15rem;
    background-color: ${props => props.theme.colors.primary};
    outline: none;
  }

  ::-webkit-slider-thumb {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;
    background: ${props => props.theme.colors.secondary};
    cursor: pointer;
  }
`;
