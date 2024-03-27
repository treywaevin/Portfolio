import {AppBar, Toolbar, IconButton, ListItemButton} from '@mui/material';
import {Box, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {SwipeableDrawer} from '@mui/material';
import { useState } from 'react';
import {List, ListItem} from '@mui/material';

/**
 * Renders Navbar
 * @returns {JSX.Element} Navbar component
 */
function NavBar({homeRef, aboutRef, skillsRef, projectsRef, contactRef}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const boxStyle = {
      transition: 'transform 0.1s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    }
    return (
      <>
        <AppBar style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          position: 'fixed',
        }}>
          <Toolbar>
              <Typography
                color='textPrimary'
                variant="h3"
                sx={{
                  flexGrow: 1,
                  display: {xs: 'none', md: 'block'},
                }}
              >
                  {'</>'}
              </Typography>
              <Box sx={{
                display: {xs: 'none', md: 'block'},
              }}>
                <Button onClick={() => {
                  homeRef.current.scrollIntoView({behavior: 'smooth'})
                }}
                sx={boxStyle}
                >
                  <Typography
                    color='textPrimary'
                    variant="h6"
                  >
                    Home
                  </Typography>
                </Button>
                <Button onClick={() => {
                  aboutRef.current.scrollIntoView({behavior: 'smooth'})
                }}
                  sx={boxStyle}
                >
                  <Typography
                    color='textPrimary'
                    variant="h6"
                  >
                    About
                  </Typography>
                </Button>
                <Button onClick={() => {
                  skillsRef.current.scrollIntoView({behavior: 'smooth'})
                }}
                  sx={boxStyle}
                >
                  <Typography
                    color='textPrimary'
                    variant="h6"
                  >
                    Skills
                  </Typography>
                </Button>
                <Button onClick={() => {
                  projectsRef.current.scrollIntoView({behavior: 'smooth'})
                }}
                  sx={boxStyle}
                >
                  <Typography
                    color='textPrimary'
                    variant="h6"
                  >
                    Projects
                  </Typography>
                </Button>
                <Button onClick={() => {
                  contactRef.current.scrollIntoView({behavior: 'smooth'})
                }}
                  sx={boxStyle}
                >
                  <Typography
                    color='textPrimary'
                    variant="h6"
                  >
                    Contact
                  </Typography>
                </Button>
              </Box>
            {/* For MobileView  */}
            <Box sx={{
              display: {xs: 'block', md: 'none'},
            }}>
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon sx={{color: '#7ae582', fontSize: 40}}/>
              </IconButton>
              <SwipeableDrawer
                anchor='top'
                open={drawerOpen}
                onOpen={() => setDrawerOpen(true)}
                onClose={() => setDrawerOpen(false)} 
              >
                <List sx={{backgroundColor: '#7ae582'}}>
                  <ListItem sx={{color: 'black'}}>
                    <ListItemButton onClick={() => {
                      homeRef.current.scrollIntoView({behavior: 'smooth'});
                      setDrawerOpen(false);
                    }}>
                      <Typography variant='body1'>
                        Home
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{color: 'black'}}>
                    <ListItemButton onClick={() => {
                      aboutRef.current.scrollIntoView({behavior: 'smooth'})
                      setDrawerOpen(false);
                    }}>
                      <Typography variant='body1'>
                        About
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{color: 'black'}}>
                    <ListItemButton onClick={() => {
                      skillsRef.current.scrollIntoView({behavior: 'smooth'})
                      setDrawerOpen(false);
                    }}>
                      <Typography variant='body1'>
                        Skills
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{color: 'black'}}>
                    <ListItemButton onClick={() => {
                      projectsRef.current.scrollIntoView({behavior: 'smooth'})
                      setDrawerOpen(false);
                    }}>
                      <Typography variant='body1'>
                        Projects
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{color: 'black'}}>
                    <ListItemButton onClick={() => {
                      contactRef.current.scrollIntoView({behavior: 'smooth'})
                      setDrawerOpen(false);
                    }}>
                      <Typography variant='body1'>
                        Contact
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
              </SwipeableDrawer>
            </Box>
          </Toolbar>
        </AppBar>
      </>
    )
}

export default NavBar;