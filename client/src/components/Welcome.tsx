import axios from 'axios'
import React, { useState, useEffect, useCallback } from 'react'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Copyright from './Copyright'
import { appTheme } from '../themes/theme'
import { Typography } from '@mui/material'
axios.defaults.withCredentials = true
type User = {
  name: string
  email: string
}
const Welcome = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  })

  const userRequest = useCallback(async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/v1/user', {
        withCredentials: true,
      })
      setUser(data)
    } catch (err) {
      console.log(err)
    }
  }, [])
  useEffect(() => {
    userRequest()
  }, [userRequest])
  console.log(user)
  return (
    <ThemeProvider theme={appTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Typography variant='h1' component='h2'>
          {user.name}
        </Typography>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Welcome
