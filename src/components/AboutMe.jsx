import {Box, Typography} from '@mui/material';
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
        <Typography variant='body1' color='white' sx={{textAlign: 'center', mb: 2}}>
          I am currently pursuing a Bachelor's degree in Computer Science at the University of California, Santa Cruz.
          With a keen interest in AI and Full Stack Development, I am passionate about exploring the intersections of these fields to create innovative solutions. As a senior in my program, I have dedicated myself to learning the principles and technologies that drive both artificial intelligence and full stack development through the many courses I have took. My goal is to leverage this knowledge to contribute meaningfully to projects that push the boundaries of technology and enhance user experiences. Whether it's developing intelligent algorithms or crafting seamless user interfaces, I'm always up for the challenge of creating technology that makes a real impact on people's lives.
        </Typography>
        <Typography variant='body1' color='white' sx={{textAlign: 'center'}}>
          While I'm not coding, I enjoy producing music such as house and hardstyle, DJing electronic music, and lifting weights at the gym.
        </Typography>
      </Box>
    </Box>
  )
};

export default About;