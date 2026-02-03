import { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const menuItems = ['Home', 'About', 'Contact']

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          {/* Desktop Navigation */}
          <div sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Button key={item} color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                {item}
              </Button>
            ))}
          </div>
          {/* Mobile Navigation */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: 16 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={toggleDrawer}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Blank body */}
      <div style={{ padding: '20px' }}>
        {/* Content goes here */}
      </div>
    </>
  )
}

export default App
