import {Button, Typography} from '@mui/material';
import {Box, Grid, TextField} from '@mui/material';
import {IconButton} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
/**
 * Renders Contact Form
 * @returns {JSX.Element} Contact component
 */
function Contact ({homeRef, aboutRef, skillsRef, projectsRef, contactRef}) {
  return (
    <>
      <Box sx={{
        bgcolor: 'black',
        padding: {xs: 5, md: 10},
      }}
        ref={contactRef}
      >
        <Box sx={{  
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'white',
          width: {xs: '100%', md: '80%'},
          borderRadius: '20px',
          margin: 'auto',
        }}>
          <Typography variant='h4' color='black' sx={{textAlign: 'center', mb: 2, mt: 4, textDecoration: 'underline', textDecorationColor: '#7ae582'}} >
            Contact Me
          </Typography>
          <Box sx={{margin: 'auto'}}>
            <IconButton component='a' href='https://www.linkedin.com/in/aevin-eliares/' target='_blank' align='center'>
              <LinkedInIcon sx={{color: 'black', fontSize: 40}}/>
            </IconButton>
            <IconButton component='a' href='https://github.com/treywaevin' target='_blank'>
              <GitHubIcon sx={{color: 'black', fontSize: 40}}/>
            </IconButton>
            <IconButton>
              <MailIcon sx={{color: 'black', fontSize: 40}}/>
            </IconButton>
          </Box>
          <form>
            <Grid container spacing={1} padding={5}>
              <Grid item xs={12} md={6}>
                <TextField label='First Name' variant='outlined' inputProps={{style:{color:' black'}}} fullWidth required/>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label='Last Name' variant='outlined' inputProps={{style:{color:' black'}}} fullWidth required/>
              </Grid>
              <Grid item xs={12}>
                <TextField label='Email' variant='outlined' inputProps={{style:{color:' black'}}} fullWidth required/>
              </Grid>
              <Grid item xs={12}>
                <TextField label='Message' multiline rows={6} variant='outlined' inputProps={{style:{color:' black'}}} fullWidth required/>
              </Grid>
              <Grid item xs={4}>
                <Button type='submit' variant='contained' color='primary' fullWidth>Send Message</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      <Box sx={{bottom: 0, padding: 2, bgcolor: 'black'}}>
        <Typography variant='body1' align='center' color='white'>
          @2024 Aevin Eliares
        </Typography>
      </Box>
    </>
  )
};

export default Contact;