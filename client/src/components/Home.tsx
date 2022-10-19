import { CssBaseline } from '@mui/material'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'
import Copyright from './Copyright'
import { appTheme } from '../themes/theme'

const Home = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Container component='main'>
        <CssBaseline />
        <h1>Home page</h1>
        <Copyright />
      </Container>
    </ThemeProvider>
  )
}

export default Home
