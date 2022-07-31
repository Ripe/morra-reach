import React from 'react';
import { ThemeProvider, css } from 'styled-components';
import * as Styled from './Theme.styles';

export const Theme = ({ theme = {}, children, ...rest }) => (
  <ThemeProvider
    theme={{
      colors: {
        primary: '#333333',
        secondary: '#ffffff',
        tertiary: '#000000',
        background: '#dddddd',
        ...theme.colors,
      },
      media: {
        large: (...args) => `@media (min-width: 40rem) { ${css(...args)} }`,
      },
    }}
    {...rest}
  >
    <Styled.Global />
    {children}
  </ThemeProvider>
);
