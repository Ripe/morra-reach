import React, { useId } from 'react';
import * as Styled from './Input.styles';

export const Input = ({ label, ...rest }) => {
  const id = useId();

  return (
    <Styled.Root>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
      <Styled.Input id={id} {...rest} />
    </Styled.Root>
  );
};
