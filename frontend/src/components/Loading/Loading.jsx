import React from 'react';
import * as Styled from './Loading.styles';

export const Loading = ({ children }) => (
  <Styled.Root>
    <Styled.Spinner />
    {children && <Styled.Content>{children}</Styled.Content>}
  </Styled.Root>
);
