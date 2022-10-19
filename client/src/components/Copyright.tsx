import * as React from 'react'
import { Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'

const Copyright = (props: any) => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Typography to='/' color='inherit' component={Link}>
        MERN Auth
      </Typography>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
export default Copyright
