import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: '2%', 
        px: '5%', 
        mt: 'auto',
        backgroundColor: '#fff', 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
          {}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component={Link}
              href="/"
              sx={{
                display: 'block',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#333', 
                textDecoration: 'none',
                mb: '8%', 
              }}
            >
              DENTCARE
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your bright smile is our priority. We provide top-notch dental services with a team of experienced professionals.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom color="text.primary">
              Quick Links
            </Typography>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Link href="/about" color="text.secondary" underline="hover">
                  About Us
                </Link>
              </Grid>
              <Grid item>
                <Link href="/services" color="text.secondary" underline="hover">
                  Services
                </Link>
              </Grid>
              <Grid item>
                <Link href="/contact" color="text.secondary" underline="hover">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              color="text.primary"
              sx={{ textAlign: { xs: 'center', md: 'right' } }}
            >
              Follow Us
            </Typography>
            <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank" color="green">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" href="https://twitter.com" target="_blank" color="green">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank" color="green">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" href="https://linkedin.com" target="_blank" color="green">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Text */}
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: '4%' }}>
          {'© '}
          {new Date().getFullYear()} DentCare. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
