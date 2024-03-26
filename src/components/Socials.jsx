import {Box, Stack} from "@mui/material";
import {IconButton} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Socials () {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      display: {xs: 'none', md: 'block'}
    }}>
      <Stack alignItems='flex-start' padding={3}>
        <IconButton component='a' href='https://www.linkedin.com/in/aevin-eliares/' target='_blank'>
          <LinkedInIcon sx={{color: 'white', fontSize: 40}}/>
        </IconButton>
        <IconButton component='a' href='https://github.com/treywaevin' target='_blank'>
          <GitHubIcon sx={{color: 'white', fontSize: 40}}/>
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Socials;

