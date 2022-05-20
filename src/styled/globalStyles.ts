import { createGlobalStyle } from 'styled-components'

type ThemeProps = {
  theme: ThemeType
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: ThemeProps) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in;
  }
  `
