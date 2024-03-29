import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {

  const [mode, setMode] = React.useState('dark');
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <NavBar mode={mode} toggleColorMode={toggleColorMode} />
      <Home/>
      <Skills/>
      <Projects/>
      <Divider/>
      <Divider/>
      <Footer />
    </ThemeProvider>
  )
}

export default App
