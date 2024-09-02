import React from 'react';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../admin/back3.jpg';

// Import the images
import dentistsImage from '../admin/dentists.png';
import appointmentsImage from '../admin/appointments.png';
import servicesImage from '../admin/services.png';

function Dashboard() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid container justifyContent="center" alignItems="center" style={{ flex: 1, padding: '40px 0' }}>
        <Grid item xs={11} sm={10} md={8}>
          <Container>
            <Typography
              variant="h3"
              gutterBottom
              align="center"
              style={{
                fontWeight: 'bold',
                color: '#f5f5f5',
                marginBottom: '40px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              Admin Dashboard
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  elevation={8}
                  style={{
                    height: '350px', // Increased height to accommodate image
                    width: '300px',
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: 15,
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Typography variant="h5" style={{ marginBottom: 10, color: '#333' }}>
                    Manage Dentists
                  </Typography>
                  <img
                    src={dentistsImage}
                    alt="Dentists"
                    style={{ width: '80%', height: '120px', objectFit: 'contain', marginBottom: 20 }}
                  />
                  <Button
                    variant="contained"
                    component={Link}
                    to="/dentists"
                    style={{
                      padding: '12px 25px',
                      fontSize: '16px',
                      backgroundColor: '#28a745',
                      color: '#fff',
                      borderRadius: 30,
                      boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.4)',
                      textTransform: 'none',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
                  >
                    View
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  elevation={8}
                  style={{
                    height: '350px',
                    width: '300px',
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: 15,
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Typography variant="h5" style={{ marginBottom: 10, color: '#333' }}>
                    Manage Appointments
                  </Typography>
                  <img
                    src={appointmentsImage}
                    alt="Appointments"
                    style={{ width: '80%', height: '120px', objectFit: 'contain', marginBottom: 20 }}
                  />
                  <Button
                    variant="contained"
                    component={Link}
                    to="/appointments"
                    style={{
                      padding: '12px 25px',
                      fontSize: '16px',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      borderRadius: 30,
                      boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.4)',
                      textTransform: 'none',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                  >
                    View
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  elevation={8}
                  style={{
                    height: '350px',
                    width: '300px',
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: 15,
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Typography variant="h5" style={{ marginBottom: 10, color: '#333' }}>
                    Manage Service
                  </Typography>
                  <img
                    src={servicesImage}
                    alt="Services"
                    style={{ width: '80%', height: '120px', objectFit: 'contain', marginBottom: 20 }}
                  />
                  <Button
                    variant="contained"
                    component={Link}
                    to="/services"
                    style={{
                      padding: '12px 25px',
                      fontSize: '16px',
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      borderRadius: 30,
                      boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.4)',
                      textTransform: 'none',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc3545')}
                  >
                    View
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
