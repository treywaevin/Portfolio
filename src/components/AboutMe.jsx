import {Box, Typography} from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import banner from '../banner.png';
function About ({homeRef, aboutRef, skillsRef, projectsRef, contactRef}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        padding: 10,
        bgcolor: 'black',
      }}
      ref={aboutRef}
      >
      <Box 
        sx={{
          width: {xs: '90%', md: '600px'},
        }}
      >
        <Typography variant='h3' color='textPrimary' sx={{textAlign: 'center', mb: 2}}>
          About Me
        </Typography>
        <Box component='img' src={banner} alt='banner'
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'auto',
              mb: 5,
            }}
          />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}>
          <PlaceIcon sx={{color: 'white', fontSize: 20, marginRight: 2}}/>
          <Typography variant='body1' color='white' sx={{textAlign: 'center', fontSize: 20}}>
            Folsom, California
          </Typography>
        </Box>
        <Typography variant='body1' color='white' sx={{textAlign: 'center', mb: 2}}>
          Hi, I'm Aevin, a Software Quality Assurance Engineer at Inductive Automation
        </Typography>
        <Typography variant='body1' color='white' sx={{textAlign: 'center'}}>
          As I embark on my career, I'm eager to apply my skills to meaningful projects and continue evolving as a developer. I'm passionate about creating efficient, user-centric applications, whether it’s working on the frontend, backend, or anything in between.
        </Typography>
      </Box>
    </Box>
  )
};

export default About;