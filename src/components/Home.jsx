
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
                    pt: { xs: 14, sm: 6 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Box
                    id="text"
                    sx={(theme) => ({
                        mt: { xs: 8, sm: 10 },
                        alignSelf: 'center',
                        height: { xs: 700, sm: 700 },
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
                                    fontSize: 'clamp(2.5rem, 8vw, 2rem)',
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
                                ." <br />A third-year Computer Science student with a passion for problem-solving and decision-making. Throughout my academic journey, I've developed a strong foundation in various programming languages and concepts. I thrive in situations that require analytical thinking and strategic decision-making. Whether it's tackling coding challenges or devising efficient solutions, I'm always up for the task. Beyond academics, I'm deeply interested in exploring the endless possibilities within the realm of technology. I'm excited to leverage my skills and knowledge to contribute meaningfully to the ever-evolving field of computer science. Join me on this journey as I continue to grow, learn, and innovate!
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
