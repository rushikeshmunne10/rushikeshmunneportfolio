
import * as React from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';


function Copyright() {
  return (
    <Typography color="text.secondary" mt={1}>
      {'Copyright © '}
      Rushikeshmunne_10&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (

    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 5 },
        py: { xs: 2, sm: 5 },
        textAlign: { sm: 'center', md: 'center' },
      }}
    >
      <div>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >

          <IconButton
            color="inherit"
            href="https://github.com/rushikeshmunne10"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/rushikeshmunne/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com/Rushikeshmunne"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
      </div>
      <Copyright />
    </Container>
  );
}
