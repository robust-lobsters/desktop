import { Global } from '@emotion/react'

export const GlobalStyleProvider = () => (
  <Global
    styles={{
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      '*::before, *::after': {
        boxSizing: 'border-box',
      },
      html: {
        lineHeight: 1,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      body: {
        minHeight: '100vh',
        backgroundColor: 'white',
        color: 'black',
        fontFamily: '"Mona Sans", "Gothic A1", sans-serif',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
      button: {
        padding: 0,
        margin: 0,
        border: 'none',
        backgroundColor: 'transparent',
      },
    }}
  />
)
