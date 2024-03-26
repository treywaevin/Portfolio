import {Box, Typography, Card, CardActionArea} from '@mui/material';
import {CardMedia, CardContent} from '@mui/material';
import SlugSlack from '../images/project1.png'
import MyLegacy from '../images/project2.png'
import Portfolio from '../images/project3.png'
import HTTP from '../images/project4.png'
import RemindMe from '../images/project5.png'
/**
 * 
 * @returns {JSX.Element} Projects component
 */
function Projects ({homeRef, aboutRef, skillsRef, projectsRef, contactRef}) {

  const cardEffect = {
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    minWidth: 378,
  };
    return (
        <Box sx={{
          height: 'auto',
          padding: 10,
          bgcolor: '#111111',
        }}
          ref={projectsRef}
        >
          <Typography variant='h3' align='center' color='textPrimary' sx={{mb: 5}}>
            Check out my work!
          </Typography>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <Box m={2}>
              <Card sx={cardEffect}>
                <CardActionArea onClick={() => window.open('https://youtu.be/8MF-wAnohuI?si=XxmrzppuFtOyPMMT', '_blank')}>
                  <CardMedia
                    component='img'
                    height='194'
                    width='378'
                    image={SlugSlack}
                    alt='slugslack'
                  />
                  <CardContent>
                    <Typography variant='h5' color='black'>
                      Slug Slack
                    </Typography>
                    <Typography variant='body3' color='black'>
                      React, Node, Express, PostgreSQL
                    </Typography>
                    <Typography variant='body2' color='black' sx={{marginTop: 1}}>
                      A full-stack website that replicates the functionality <br /> of Slack, a popular messaging platform.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box m={2}>
              <Card sx={cardEffect}>
                <CardActionArea onClick={() => window.open('https://github.com/treywaevin/MyLegacy-App', '_blank')}>
                  <CardMedia
                    component='img'
                    height='194'
                    width='378'
                    image={MyLegacy}
                    alt='MyLegacy'
                  />
                  <CardContent>
                    <Typography variant='h5' color='black'>
                      MyLegacy
                    </Typography>
                    <Typography variant='body3' color='black'>
                      Swift, SwiftUI
                    </Typography>
                    <Typography variant='body2' color='black' sx={{marginTop: 1}}>
                      An iOS app that allows users to track their workouts <br /> based on their records of each exercise's set range.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box m={2}>
              <Card sx={cardEffect}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='194'
                    width='378'
                    image={Portfolio}
                    alt='portfolio'
                  />
                  <CardContent>
                    <Typography variant='h5' color='black'>
                      Personal Portfolio
                    </Typography>
                    <Typography variant='body3' color='black'>
                      React
                    </Typography>
                    <Typography variant='body2' color='black' sx={{marginTop: 1}}>
                      The website you are currently looking at! Built with MaterialUI, <br /> TSParticles, and Material Design Icons.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box m={2}>
              <Card sx={cardEffect}>
                <CardActionArea onClick={() => window.open('https://github.com/treywaevin/HTTPServer', '_blank')}>
                  <CardMedia
                    component='img'
                    height='194'
                    width='378'
                    image={HTTP}
                    alt='HTTP server'
                  />
                  <CardContent>
                    <Typography variant='h5' color='black'>
                      HTTP Server
                    </Typography>
                    <Typography variant='body3' color='black'>
                      C
                    </Typography>
                    <Typography variant='body2' color='black' sx={{marginTop: 1}}>
                      Built an HTTP server from scratch that is able to serve multiple<br />clients simultaneously.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box m={2}>
              <Card sx={cardEffect}>
                <CardActionArea onClick={() => window.open('https://github.com/treywaevin/RemindMe', '_blank')}>
                  <CardMedia
                    component='img'
                    height='194'
                    width='378'
                    image={RemindMe}
                    alt='RemindMe'
                  />
                  <CardContent>
                    <Typography variant='h5' color='black'>
                      RemindMe
                    </Typography>
                    <Typography variant='body3' color='black'>
                      Python
                    </Typography>
                    <Typography variant='body2' color='black' sx={{marginTop: 1}}>
                      A discord bot that DMs users reminders at a specified time. <br /> Built with discord.py.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        </Box>
    )
};

export default Projects;