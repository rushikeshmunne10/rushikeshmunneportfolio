import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';


function NavBar({ mode, toggleColorMode }) {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 50; //128
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  // const redirectToGoogleDrive = () => {
  //   window.open = ('https://docs.google.com/document/d/1BNPL6qpetZDgOlXw_vvlNfzytlsFmQGq/edit?usp=sharing&ouid=104208161993950924948&rtpof=true&sd=true', '_blank');
  //   console.log("done")

  // };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Box
                sx={(theme) => ({
                  fontSize: 9,
                  borderRadius: '999px',
                  color:
                    theme.palette.mode === 'dark'
                      ? '#35baf6'
                      : '#2c387e',
                })}>
                PORTFOLIO@RM</Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('home')}
                  sx={{ py: '6px', px: '12px', ml:3 }}
                >
                  <Typography variant="body2" color="text.primary">
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('skills')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Skills
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('projects')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Projects
                  </Typography>
                </MenuItem>
                {/* <MenuItem
                  onClick={() => scrollToSection('contact')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Contact Me
                  </Typography>
                </MenuItem> */}
                <MenuItem
                  // onClick={() => redirectToGoogleDrive}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    <a  href='https://docs.google.com/document/d/1BNPL6qpetZDgOlXw_vvlNfzytlsFmQGq/edit?usp=sharing&ouid=104208161993950924948&rtpof=true&sd=true' target='_blank' style={{ textDecoration: 'none', color: '#C0C0C0', fontSize: '0.9rem' }} >Resume</a>
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('home')}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('skills')}>
                    Skills
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('projects')}>
                    Projects
                  </MenuItem>
                  {/* <MenuItem onClick={() => scrollToSection('contact')}>
                    Contact Me
                  </MenuItem> */}
                  <MenuItem>
                  <a  href='https://docs.google.com/document/d/1BNPL6qpetZDgOlXw_vvlNfzytlsFmQGq/edit?usp=sharing&ouid=104208161993950924948&rtpof=true&sd=true' target='_blank' style={{ textDecoration: 'none', color: '#C0C0C0', fontSize: '0.9rem' }} >Resume</a>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default NavBar;