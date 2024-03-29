
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const items = [
  {
    icon: "src\\assets\\reactjs.png",
    title: 'React JS',
    description:
      'Skilled in React.js for dynamic UIs with efficient component architecture and virtual DOM for scalability.',
    website: "https://react.dev/learn",
  },
  {
    icon: "src\\assets\\js.png",
    title: 'JavaScript',
    description:
      'Proficient in JavaScript for developing interactive and responsive web applications.',
      website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: "src\\assets\\github.jpeg",
    title: 'Git / Github',
    description:
      'Competent in version control with Git/GitHub for seamless collaboration and code management, ensuring effective project workflow',
      website: "https://docs.github.com/en",
  },
  {
    icon: "src\\assets\\nodejs.png",
    title: 'Node JS',
    description:
      'Leveraging Node.js to build scalable and efficient server-side applications.',
      website: "https://nodejs.org/docs/latest/api/",
  },
  {
    icon: "src\\assets\\oops.png",
    title: 'OOPS',
    description:
      'Applying Object-Oriented Programming (OOP) principles for structured and modular problem-solving',
      website: "https://www.geeksforgeeks.org/introduction-of-object-oriented-programming/",
  },
  {
    icon: "src\\assets\\docker.jpeg",
    title: 'Docker',
    description:
      'Utilizing Docker for containerized application deployment and efficient development workflows',
      website: "https://docs.docker.com/",
  },
  {
    icon: "src\\assets\\nextjs.png",
    title: 'Next JS',
    description:
      'Competent in Next.js for server-side rendered web apps with efficient routing.',
      website: "https://nextjs.org/docs",
  },
  {
    icon: "src\\assets\\mern.png",
    title: 'MERN Stack',
    description:
      'Skilled in MERN stack development for building robust and modern web applications.',
      website: "https://www.geeksforgeeks.org/mern-stack/",
  },
];

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h3">
            Skills
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Crafting my toolkit for success.
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
          <p>(Click the Titles to visit official Documentation)</p>
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                
                <Box sx={{ opacity: '100%' }}><img src={item.icon} alt={item.title} width={50} /></Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                     <a href={item.website} target='_blank' style={{textDecoration: "none", color: "white"}}>{item.title}</a>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.300' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
