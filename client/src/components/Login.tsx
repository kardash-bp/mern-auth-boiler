import React, { useState, FormEvent, ChangeEvent, FocusEvent } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'
import Copyright from './Copyright'
import { appTheme } from '../themes/theme'
import { loginUser } from '../services/authRequests'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: {
      value: '',
      error: false,
      errorMessage: 'You must enter a email',
    },
    password: {
      value: '',
      error: false,
      errorMessage: 'You must enter a password',
    },
  })
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (value === '') {
      setFormValues({
        ...formValues,
        [name]: { ...formValues[name as keyof typeof formValues], error: true },
      })
    } else {
      setFormValues({
        ...formValues,
        [name]: {
          ...formValues[name as keyof typeof formValues],
          error: false,
        },
      })
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name as keyof typeof formValues],
        value,
        error: false,
      },
    })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formValues.email.error || formValues.password.error) return
    try {
      loginUser({
        email: formValues.email.value,
        password: formValues.password.value,
      })
      navigate('/')
    } catch (err) {
      console.log(err)
    }
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
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            autoComplete='off'
            sx={{ mt: 1 }}
          >
            <TextField
              required
              type='email'
              margin='normal'
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              value={formValues.email.value}
              onBlur={handleBlur}
              onChange={handleChange}
              error={formValues.email.error}
              helperText={
                formValues.email.error && formValues.email.errorMessage
              }
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              value={formValues.password.value}
              onBlur={handleBlur}
              onChange={handleChange}
              error={formValues.password.error}
              helperText={
                formValues.password.error && formValues.password.errorMessage
              }
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
