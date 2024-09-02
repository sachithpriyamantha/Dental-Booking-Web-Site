import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system'; 
import doc1 from '../assets/doc1.jpg';
import doc2 from '../assets/doc2.jpg';
import doc3 from '../assets/doc3.jpg';
import doc4 from '../assets/doc4.jpg';
import doc5 from '../assets/doc5.jpg';
import doc6 from '../assets/doc6.jpg';

const doctors = [
    {
      name: "Dr. Oliver Green",
      specialty: "General Dentist",
      description: "Dr. Oliver Green has extensive experience in general dentistry, offering comprehensive care for all your dental needs.",
      avatar: doc1
    },
    {
      name: "Dr. Clara White",
      specialty: "Orthodontist",
      description: "Dr. Clara White specializes in orthodontics, dedicated to correcting misaligned teeth and improving dental aesthetics.",
      avatar: doc2
    },
    {
      name: "Dr. Emily Carter",
      specialty: "Periodontist",
      description: "Dr. Emily Carter focuses on periodontal care, managing gum diseases and ensuring optimal oral health.",
      avatar: doc3
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Oral Surgeon",
      description: "Dr. Michael Brown is an oral surgeon with expertise in complex extractions, dental implants, and surgical procedures.",
      avatar: doc4
    },
    {
      name: "Dr. Sarah Lee",
      specialty: "Endodontist",
      description: "Dr. Sarah Lee is an endodontist specializing in root canal treatments and the management of dental pulp diseases, dedicated to correcting misaligned teeth",
      avatar: doc5
    },
    {
      name: "Dr. James Allen",
      specialty: "Cosmetic Dentist",
      description: "Dr. James Allen offers cosmetic dental services, including teeth whitening, veneers, and smile makeovers to enhance your smile.",
      avatar: doc6
    }
  ];
  

  const StyledCard = styled(Card)({
    borderRadius: '15px',
    height: 'auto',
    transition: 'transform 0.3s, box-shadow 0.3s',
    borderLeft: '5px solid white',
    paddingLeft: '20px',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    },
    '@media (max-width: 768px)': {
      height: 'auto',
    },
  });
  
  

const StyledAvatar = styled(Avatar)({
  width: '100px',
  height: '100px', 
  borderRadius: '8px', 
  marginBottom: '10%',
  display: 'block',
  margin: 'auto',
});

const StyledCardContent = styled(CardContent)({
  textAlign: 'center',
  padding: '5%', 
});

const StyledGridContainer = styled(Grid)({
  padding: '5%',
  minHeight: '100vh',
  width: '100%',
  backgroundColor: '#73C6B6',
  marginLeft: '1px',
  marginRight: '10px',
});


function Homediv4() {
  return (
    <StyledGridContainer container spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <Typography color= "#F0F0F0" variant="h2" align="center" fontWeight="bold" fontSize="2rem" gutterBottom>
          Our Dentists
        </Typography>
      </Grid>
      {doctors.map((doctor, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StyledCard>
            <StyledCardContent>
              <StyledAvatar alt={doctor.name} src={doctor.avatar} />
              <Typography variant="h6" gutterBottom>{doctor.name}</Typography>
              <Typography variant="subtitle1" color="textPrimary">Specialty: {doctor.specialty}</Typography>
              <Typography variant="body2" color="textSecondary">{doctor.description}</Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      ))}
    </StyledGridContainer>
  );
}

export default Homediv4;
