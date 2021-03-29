import { ThemeProvider } from 'styled-components'
import theme from '../src/theme/index';
import GlobalStyle from '../src/theme/GlobalStyle';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Portifólio Mi</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap" rel="stylesheet"
      />
    </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
