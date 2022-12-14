import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *:before, *:after, * {
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;
  }

  html {
    width: 100%;
    height: 100%;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.background};

    ${({ theme }) => theme.media.large`
      margin: 10vh 0 0;
    `}
  }

  input, textarea, select {
    font-size: 16px;
  }
  
  a {
    color: currentColor;
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }

  p {
    margin: 0 auto 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
