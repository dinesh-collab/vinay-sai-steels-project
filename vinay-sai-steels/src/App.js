import React from 'react';
import { Container, Box, Typography, Button, AppBar, Toolbar } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
          Vinay Sai Steels
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Vinay Sai Steels
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
