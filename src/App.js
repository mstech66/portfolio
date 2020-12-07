import React from 'react';
import SocialBar from './components/SocialBar.js';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#fafafa'
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh', borderRadius: '0px' }}>
        <div className="App">
          <p>Coming Soon</p>
          <SocialBar />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
