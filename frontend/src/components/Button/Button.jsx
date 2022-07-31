import React from 'react';
import * as Styled from './Button.styles';

export const Button = ({ children, ...rest }) => <Styled.Root {...rest}>{children}</Styled.Root>;
