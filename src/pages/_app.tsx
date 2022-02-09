import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import theme from 'src/styles/theme'
import GlobalStyles from 'src/styles/GlobalStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Component {...pageProps} />
    </MuiThemeProvider>
  )
}

export default MyApp
