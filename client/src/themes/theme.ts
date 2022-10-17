import { createTheme } from '@mui/material/styles'
import { blueGrey, pink } from '@mui/material/colors'
export const appTheme = createTheme({
  palette: {
    background: {
      paper: blueGrey[100],
      default: blueGrey[100],
    },
    text: {
      primary: blueGrey[700],
    },

    primary: {
      light: blueGrey[100],
      main: blueGrey[500],
      dark: blueGrey[700],
      contrastText: blueGrey[50],
    },
    secondary: { main: pink['A400'] },
  },
})
