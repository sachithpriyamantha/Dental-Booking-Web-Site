import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ser1 from '../assets/ser1.jpg';
import ser2 from '../assets/ser2.jpg';
import ser3 from '../assets/ser3.jpg';
import ser4 from '../assets/ser4.jpg';
import hos1 from '../assets/hos1.jpg';


const StyledBox = styled(Box)({
  flexGrow: 1,
  padding: '5%',
  backgroundColor: '#1a9a7b',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const StyledPaper = styled(Paper)({
  padding: '0', 
  position: 'relative',
  height: '400px',
  width: '300px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: '3px solid #FFFFFF',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  },
});



const ImageBox = styled(Box)({
  height: '60%', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const TextBox = styled(Box)({
  height: '60%', 
  backgroundColor: '#FFFFFF',
  padding: '60px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
});

function Homediv3() {
  return (
    <StyledBox>
      <Typography color= "white" variant="h2" align="center" fontWeight="bold" fontSize="2rem"  gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center" marginTop= "15px">
        <Grid item>
          <StyledPaper elevation={3}>
            <ImageBox style={{ backgroundImage: `url(${ser1})` }} />
            <TextBox>
              <Typography variant="h6" gutterBottom>General Dentistry</Typography>
              <Typography variant="body1">
              General dentistry encompasses routine dental care and preventive measures. This includes regular cleanings, check-ups, and examinations to maintain oral health
              </Typography>
            </TextBox>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledPaper elevation={3}>
            <ImageBox style={{ backgroundImage: `url(${ser2})` }} />
            <TextBox>
              <Typography variant="h6" gutterBottom>Cosmetic Dentistry</Typography>
              <Typography variant="body1">
              Cosmetic dentistry focuses on enhancing the appearance of your teeth, gums, and smile. Services include teeth whitening, veneers, bonding, and cosmetic contouring
              </Typography>
            </TextBox>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledPaper elevation={3}>
            <ImageBox style={{ backgroundImage: `url(${ser3})` }} />
            <TextBox>
              <Typography variant="h6" gutterBottom>Orthodontics</Typography>
              <Typography variant="body1">
              Orthodontics involves the correction of misaligned teeth and jaws using braces or clear aligners. This specialty aims to improve bite alignment, teeth positioning
              </Typography>
            </TextBox>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledPaper elevation={3}>
            <ImageBox style={{ backgroundImage: `url(${ser4})` }} />
            <TextBox>
              <Typography variant="h6" gutterBottom>Periodontics</Typography>
              <Typography variant="body1">
              Periodontics deals with the prevention, diagnosis, and treatment of gum disease and other conditions affecting the supporting structures of the teeth.
              </Typography>
            </TextBox>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledBox>
  );
}

export default Homediv3;
