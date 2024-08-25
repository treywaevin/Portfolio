import {Button, Snackbar, Typography} from '@mui/material';
import {Box, Grid, TextField} from '@mui/material';
import {IconButton} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import emailjs from '@emailjs/browser';
import {useState, useRef} from 'react';
/**
 * Renders Contact Form
 * @returns {JSX.Element} Contact component
 */
function Contact ({homeRef, aboutRef, skillsRef, projectsRef, contactRef}) {
  const [open, setOpen] = useState(false);

  const form = useRef();
  const sendForm = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_ti6me8o', 'template_7g3puro', form.current, {
      publicKey: 'I7EEXGeyd4HlGeYqJ',
    })
    .then(
      () => {
        setOpen(true);
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }
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
            <IconButton component='a' href='https://www.linkedin.com/in/aevin-eliares/' target='_blank' align='center'
            sx={{
              transition: 'transform 0.1s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <LinkedInIcon sx={{color: 'black', fontSize: 40}}/>
            </IconButton>
            <IconButton component='a' href='https://github.com/treywaevin' target='_blank'
            sx={{
              transition: 'transform 0.1s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <GitHubIcon sx={{color: 'black', fontSize: 40}}/>
            </IconButton>
            <IconButton component='a' href='mailto:aevin.eliares@gmail.com'
            sx={{
              transition: 'transform 0.1s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <MailIcon sx={{color: 'black', fontSize: 40}}/>
            </IconButton>
          </Box>
          <form ref={form} onSubmit={sendForm}>
            <Grid container spacing={1} sx={{padding: {xs: 2, md: 5}}}>
              <Grid item xs={12}>
                <TextField label='Name' name='from_name' variant='outlined' inputProps={{style:{color:' black'}}} fullWidth required/>
              </Grid>
              <Grid item xs={12}>
                <TextField label='Email' name='from_email' variant='outlined' inputProps={{style:{color:' black'}}} fullWidth required/>
              </Grid>
              <Grid item xs={12}>
                <TextField label='Message' name='message' multiline rows={6} variant='outlined' inputProps={{style:{color:' black'}}} fullWidth required/>
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
        ©2024 Aevin Eliares
        </Typography>
      </Box>
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        open={open}
        onClose={() => setOpen(false)}
        message='Message Sent!'
        autoHideDuration={5000}
      >
      </Snackbar>
    </>
  )
};

export default Contact;