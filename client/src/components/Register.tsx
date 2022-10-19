import React, { FormEvent, ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from '../themes/theme'
import { registerUser } from '../services/authRequests'
import Copyright from './Copyright'

const Register = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await registerUser(inputs)
    console.log(data)
  }
  return (
    <ThemeProvider theme={appTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Register
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            autoComplete='off'
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type='text'
                  autoComplete='off'
                  name='name'
                  required
                  fullWidth
                  id='name'
                  label='Name'
                  autoFocus
                  value={inputs.name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type='email'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoCapitalize='off'
                  autoComplete='off'
                  autoCorrect='off'
                  spellCheck='false'
                  value={inputs.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='off'
                  value={inputs.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Typography to='/login' component={Link} variant='body2'>
                  Already have an account? Sign in
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Register
