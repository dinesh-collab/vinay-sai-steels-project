import React from 'react';
import { Container, Grid, Box, Typography, Paper, Link, AppBar, Toolbar, List, ListItem, ListItemText } from '@mui/material';

function App() {
  return (
    <div>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundImage: `url(${"data:image/jpeg;base64,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"})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '200px' }}>
        <Toolbar sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'white' }}>
            Welcome to Vinay Kumar Steel & Iron Shop
          </Typography>
        </Toolbar>
      </AppBar>
      

      {/* Body Container */}
      <Container sx={{ display: 'flex', minHeight: '80vh', mt: 3 }}>
        {/* Left Panel */}
        <Box sx={{ width: '20%', bgcolor: 'grey.200', p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Menu
          </Typography>
          <List>
            <ListItem button component="a" href="#product1">
              <ListItemText primary="Justdail" />
            </ListItem>
            {/* <ListItem button component="a" href="#product2">
              <ListItemText primary="Product 2" />
            </ListItem>
            <ListItem button component="a" href="#product3">
              <ListItemText primary="Product 3" />
            </ListItem> */}
          </List>
        </Box>

        {/* Main Content Panel */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={3}>
            {/* Product 1 */}
            <Grid item xs={12} sm={6} md={4} id="product1">
              <Link href="/product1">
                <Paper elevation={3} sx={{ p: 2 }}>
                  <img src="data:image/jpeg;base64,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" alt="Product 1" style={{ width: '100%' }} />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Justdail
                  </Typography>
                </Paper>
              </Link>
            </Grid>

            {/* Product 2 */}
            {/* <Grid item xs={12} sm={6} md={4} id="product2">
              <Link href="/product2">
                <Paper elevation={3} sx={{ p: 2 }}>
                  <img src="https://via.placeholder.com/150" alt="Product 2" style={{ width: '100%' }} />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Product 2
                  </Typography>
                </Paper>
              </Link>
            </Grid>

            {/* Product 3 */}
            {/* <Grid item xs={12} sm={6} md={4} id="product3">
              <Link href="/product3">
                <Paper elevation={3} sx={{ p: 2 }}>
                  <img src="https://via.placeholder.com/150" alt="Product 3" style={{ width: '100%' }} />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Product 3
                  </Typography>
                </Paper>
              </Link>
          </Grid> */}
          </Grid>  
        </Box>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: 'grey.800', color: 'white', p: 3, mt: 3 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {/* <Typography variant="h6">Contact Us</Typography>
              <Typography variant="body2">Email: contact@steelshop.com</Typography>
              <Typography variant="body2">Phone: +1 234 567 890</Typography> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Location</Typography>
              <Typography variant="body2">NGO Colony, Cuddapah Ho, Kadapa - 516001</Typography>
              <Typography variant="body2"> (OPP Kesava Reddy School)</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
