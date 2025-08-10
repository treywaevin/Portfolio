import { Typography } from "@mui/material";
import {Box, Button} from "@mui/material";
import {keyframes, useTheme} from '@mui/material/styles';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import {IconButton} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import headshot from '../headshot.png';
import resume from '../resume.pdf';
import Particle from "./particles";
import {useState, useEffect} from "react";
/** 
 * 
 */
function Welcome({homeRef, aboutRef, skillsRef, projectsRef, contactRef}) {
  const slideIn = keyframes`
    0% {
      -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  `;
  const bounce = keyframes`
    0% {
      -webkit-transform: translateY(-500px);
              transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
              transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
              transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
              transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  `;
  const swingIn = keyframes`
    0% {
      -webkit-transform: rotateX(-100deg);
              transform: rotateX(-100deg);
      -webkit-transform-origin: top;
              transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
              transform: rotateX(0deg);
      -webkit-transform-origin: top;
              transform-origin: top;
      opacity: 1;
    }
  `;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [firstSlide, setFirstSlide] = useState(false);
  const [secondSlide, setSecondSlide] = useState(false);
  const [thirdSlide, setThirdSlide] = useState(false); 
  const [swingAnim, setSwingAnim] = useState(false);
  const [bounceAnim, setBounceAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => { 
      setFirstSlide(true);
    }, 500);
    setTimeout(() => { 
      setSecondSlide(true);
    }, 1000);
    setTimeout(() => {
      setThirdSlide(true);
    }, 1500);
    setTimeout(() => {
      setSwingAnim(true);
    }, 2000);
    setTimeout(() => {
      setBounceAnim(true);
    }, 1500);
  },[]);
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
              sx={{
                visibility: firstSlide ? 'visible' : 'hidden',
                animation: firstSlide && `${slideIn} 1s`,
              }}
            >
              Hi,
            </Typography>
            <Typography variant={isMobile ? 'h3' :'h2'} color='white'
              sx={{
                visibility: secondSlide ? 'visible' : 'hidden',
                animation: secondSlide && `${slideIn} 1s`,
              }}
            >
              I'm
              <span style={{color: '#7ae582'}}> Aevin</span>
              .
            </Typography>
            <Typography 
              variant={isMobile ? 'h5' :'h4'}
              color='white'
              sx={{
                visibility: thirdSlide ? 'visible' : 'hidden',
                animation: thirdSlide && `${slideIn} 1s`,
              }}
            >
              A
              <span style={{color: '#7ae582'}}> Software Quality Assurance Engineer </span> at
            </Typography>
            <Typography 
              variant={isMobile ? 'h5' :'h4'}
              color='white'
              sx={{
                marginBottom: 3,
                visibility: thirdSlide ? 'visible' : 'hidden',
                animation: thirdSlide && `${slideIn} 1s`,
              }}
            >
              Inductive Automation.
            </Typography>
            <a href={resume} target='_blank' rel='noopener noreferrer'>
              <Button
                variant='outlined'
                sx={(theme) => ({
                  padding: {xs: '1', md: '3'},
                  borderColor: theme.palette.text.primary,
                  transition: 'transform 0.1s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    borderColor: theme.palette.text.primary
                  },
                  animation: swingAnim && `${swingIn} 1s`,
                  visibility: swingAnim ? 'visible' : 'hidden',
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
              border: '5px solid white',
              animation: bounceAnim && `${bounce} 2s`,
              visibility: bounceAnim ? 'visible' : 'hidden',
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