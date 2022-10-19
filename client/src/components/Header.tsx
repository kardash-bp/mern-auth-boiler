import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Tab, Tabs } from '@mui/material'
const Header = () => {
  const [value, setValue] = useState(0)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography
            variant='h6'
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          >
            MERN Auth
          </Typography>
          <Tabs
            indicatorColor='secondary'
            textColor='inherit'
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab to='/' component={NavLink} label='Home' />
            <Tab to='/login' component={NavLink} label='Login' />
            <Tab to='/reg' component={NavLink} label='Register' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
