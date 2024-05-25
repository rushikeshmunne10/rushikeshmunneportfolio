
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
  // {
  //   title : 'ToDoApp',
  //   stack : 'React JS, Tailwind CSS, Node JS, MongoDB',
  //   description: [
  //     'Developed a user-friendly interface allowing users to easily add, edit, and delete tasks',
  //     'Integrated responsive design principles with Tailwind CSS for optimal viewing experience on various screen sizes',
  //     'Utilized React hooks for state management and efficient component re-rendering'
  //   ],
  //   buttonText: 'Visit Webpage',
  //   buttonVariant: 'outlined',
  //   link: 'https://rushikeshmunne10.github.io/todoApp/'
  // },
  {
    title : 'Newsifyy ',
    stack : 'React JS, NewsAPI',
    description: [
      'Developed a dynamic news application using React JS',
      'Integrated external news APIs to provide real-time news updates',
      'Implemented user-friendly features for a seamless news browsing experience'
    ],
    buttonText: 'Visit Repository',
    buttonVariant: 'outlined',
    link: 'https://github.com/rushikeshmunne10/NewsApp'
  },
  // {
  //   title: 'Cloned Webpages',
  //   stack: 'HTML,CSS',
  //   description: [
  //     'Successfully replicated various webpages using HTML and CSS',
  //     'Demonstrated proficiency in front-end development by mimicking the structure and styling of existing websites',
  //     'Gained hands-on experience in understanding and implementing diverse design patterns'
  //   ],
  //   buttonText: 'Visit Pages',
  //   buttonVariant: 'outlined'
  // },

];

export default function Projects() {
  return (
    <Container
      id="projects"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '80%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h3" color="text.primary">
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Delivered projects demonstrating creative problem-solving and technical acumen.
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: '1px solid',
                borderColor: undefined,
                background: 'linear-gradient(#033363, #021F3B)',
                minBlockSize: '30rem',
              }}
            >
              <CardContent>
              <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'grey.100'
                  }}
                >
                  <Typography component="h3" variant="h4">
                    {tier.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color:'grey.50',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    Tech Stack: {tier.stack}
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                            'primary.main'
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:'grey.200'
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  component="a"
                  href={tier.link}
                  target="_blank"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
