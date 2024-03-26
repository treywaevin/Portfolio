import {Box, Typography} from '@mui/material';
import Icon from '@mdi/react';
import {mdiLanguagePython, mdiLanguageCpp} from '@mdi/js';
import {mdiLanguageC, mdiLanguageJavascript, mdiDatabase, mdiNpm} from '@mdi/js';
import {mdiReact, mdiDocker, mdiMicrosoftVisualStudioCode, mdiNodejs} from '@mdi/js';
import {mdiGit, mdiGithub, mdiGitlab, mdiElephant, mdiLanguageSwift} from '@mdi/js';
import {Grid} from '@mui/material';
/**
 * 
 * 
 * @returns react element
 */
function Skills ({homeRef, aboutRef, skillsRef, projectsRef, contactRef}) {
  const appSize = 3;
  const appColor = 'white';

  const boxStyle = {
    textAlign: 'center',
    border: '3px solid #7ae582',
    borderRadius: '10px',
    transition: 'transform 0.1s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  };
  
  return(
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 10,
      gap: 6,
      bgcolor: '#111111',
    }}
      ref={skillsRef}
    >
      <Typography variant='h3' color='textPrimary' sx={{textAlign: 'center', mb: 2}}>
          My Skills
      </Typography>
      <Box>
        <Typography variant='h4' color='white'
          sx={{textAlign: 'center', mb: 4, textDecoration: 'underline', textDecorationColor: '#7ae582'}}
        >
          Languages
        </Typography>
        <Box>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiLanguagePython} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>Python</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiLanguageC} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>C</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiLanguageCpp} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>C++</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiLanguageJavascript} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>JavaScript</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiDatabase} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>SQL</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiLanguageSwift} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>Swift</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Typography variant='h4' color='white'
          sx={{textAlign: 'center', mb: 4, textDecoration: 'underline', textDecorationColor: '#7ae582'}}
        >
          Technologies
        </Typography>
        <Box>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiReact} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>React</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiDocker} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>Docker</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiElephant} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>PostgreSQL</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiNodejs} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>Node.js</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiNpm} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>NPM</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiMicrosoftVisualStudioCode} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>VSCode</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiGit} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>Git</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiGithub} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>Github</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg={3} xl={true}>
              <Box sx={boxStyle}>
                <Icon path={mdiGitlab} size={appSize} color={appColor}/>
                <Typography variant='h6' color='white'>Gitlab</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
};

export default Skills;