import { Typography } from "@mui/material";
import {Box, Button} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import {IconButton} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import headshot from '../headshot.png';
import resume from '../resume.pdf';
import Particle from "./particles";
/** 
 * 
 */
function Welcome({homeRef, aboutRef, skillsRef, projectsRef, contactRef}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
      <>
        <Box sx={{
          display: 'flex',
          flexDirection: {xs: 'column-reverse', md: 'row'},
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          gap: {xs: 1, md: 30},
          bgcolor: 'transparent',
        }}
          ref={homeRef}
        >
          <Box sx={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }}>
            <Particle />
          </Box>
          <Box>
            <Typography
              color='white'
              variant= {isMobile ? 'h3' :'h2'}
            >
              Hi,
            </Typography>
            <Typography variant={isMobile ? 'h3' :'h2'} color='white'>
              I'm
              <span style={{color: '#7ae582'}}> Aevin</span>
              .
            </Typography>
            <Typography 
              variant={isMobile ? 'h5' :'h4'}
              color='white'
            >
              A 
              <span style={{color: '#7ae582'}}> software developer </span> studying
            </Typography>
            <Typography 
              variant={isMobile ? 'h5' :'h4'}
              color='white'
              sx={{marginBottom: 3}}
            >
              computer science at UC Santa Cruz
            </Typography>
            <a href={resume} target='_blank' rel='noopener noreferrer'>
              <Button
                variant='outlined'
                sx={(theme) => ({
                  padding: {xs: '1', md: '3'},
                  borderColor: theme.palette.text.primary,
                  '&:hover': {
                    borderColor: theme.palette.text.primary
                  },
                })}
              >
                <Typography
                  variant='h6'
                  color='textPrimary'
                >
                  Resume
                </Typography>
              </Button>
            </a>
          </Box>
          <Box component='img' src={headshot} alt='headshot'
            sx={{
              width: {xs: '300px', md: '350px'},
              borderRadius: '50%',
              border: '5px solid white'
            }}
          />
        </Box>
        <Box sx={{
          display: {xs: 'none', md:'flex'},
          justifyContent: 'center',
          position: 'absolute',
          bottom: '20px',
          width: '100%',
        }}>
          <IconButton onClick={() => {
            aboutRef.current?.scrollIntoView({behavior: 'smooth'});
          }}>
            <ArrowDropDownCircleIcon sx={{color: 'white', fontSize: 40}}/>
          </IconButton>
        </Box>
      </>
    )
};

export default Welcome;