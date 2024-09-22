
import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import img from '../assets/Imgimg.jpg'

const Home = () => {
    return (
        <Box
            id="home"
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                backgroundSize: '100% 80%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 10, sm: 4 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Box
                    id="text"
                    sx={(theme) => ({
                        mt: { xs: 8, sm: 10 },
                        alignSelf: 'center',
                        height: { xs: 550, sm: 600 },
                        width: '100%',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor:
                            theme.palette.mode === 'light'
                                ? alpha('#BFCCD9', 0.5)
                                : alpha('#9CCCFC', 0.1),
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    })}
                >
                    <Stack spacing={2} useFlexGap sx={{ display: 'flex', flexDirection: 'row' }} >
                        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' }, mt: { xs: 10, sm: 20 }, px: { xs: 1, sm: 5 } }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    alignSelf: 'left',
                                    textAlign: 'left',
                                    fontSize: 'clamp(1.5rem, 8vw, 2rem)',
                                }}
                            >
                                "Welcome!"

                            </Typography>
                            <Typography
                                textAlign="left"
                                color="text.secondary"
                                sx={{ alignSelf: 'left', width: { sm: '100%', md: '100%' } }}
                            >
                                Hello there! I'm &nbsp;
                                <Typography
                                    component="span"
                                    sx={{
                                        fontSize: 'clamp(1.5rem, 5vw, 1rem)',
                                        color: (theme) =>
                                            theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                    }}
                                >
                                    Rushikesh Munne
                                </Typography>
                                ." <br />Final-year computer science student with hands-on experience in software development and a demonstrated ability to tackle complex problems. I'm skilled at problem solving and delivering effective solutions, and I'm eager to apply my knowledge to real-world projects. I am eager to contribute to dynamic teams and fast-paced environments, and I am ready to make an impact in the tech industry while constantly growing and learning.
                            </Typography>
                        </Stack>
                        <Box
                            id='image'
                            sx={{
                                display: {xs: 'none',sm: 'none',md: 'flex', lg: 'flex', xl: 'flex'},
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                mr: 5,
                            }}
                        >

                            <img src={img} alt='Image' width={300} height={300} />
                        </Box>
                    </Stack>
                    <Stack
                        justifyContent="center"
                        spacing={1}
                        useFlexGap
                        sx={{
                            color: 'text.secondary', mt: { xs: 5, sm: 5 }
                        }}
                    >

                        <Typography
                            textAlign="center"
                            color="text.primary"
                            sx={{ alignSelf: 'left', width: { sm: '100%', md: '100%' } }}
                        >
                            Let's Connect !!
                        </Typography>
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
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Home
