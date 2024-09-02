import React from 'react';
import visionImage from '../assets/about1.jpg'; // Adjust the path if needed
import missionImage from '../assets/about2.jpg';
import valuesImage from '../assets/about3.jpg';
import './about.css'

function Homediv2() {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>About Us</h2>
      <div className="cardsContainer">
        <div className="card" style={{ backgroundImage: `url(${visionImage})` }}>
          <h4>Our Vision</h4>
          <p>
            Our vision is to create a healthcare ecosystem where accessing quality medical care is as simple and convenient as booking any other service. By leveraging technology, we aim to eliminate the complexities often associated with scheduling appointments, allowing patients to focus on their health and well-being. We envision a future where patients have complete control over their healthcare journey, with our platform serving as their trusted companion.
          </p>
        </div>
        <div className="card" style={{ backgroundImage: `url(${missionImage})` }}>
          <h4>Our Mission</h4>
          <p>
            Our mission is to empower patients and healthcare providers through a robust, user-friendly online platform that streamlines the appointment booking process. We are dedicated to bridging the gap between patients and medical professionals by offering a centralized solution that enhances communication and coordination. Through our platform, we strive to optimize resource allocation, reduce wait times, and improve overall patient satisfaction while supporting healthcare providers in delivering efficient and effective care.
          </p>
        </div>
        <div className="card" style={{ backgroundImage: `url(${valuesImage})` }}>
          <h4>Our Values</h4>
          <p>
            We prioritize the patient experience above all else. Our platform is designed with the patient in mind, ensuring ease of use, accessibility, and personalized care.
            We are committed to staying at the forefront of healthcare technology. By embracing innovation, we continuously seek to improve our platform and deliver exceptional value to our users.
            We believe in optimizing processes to save time and effort for both patients and healthcare providers. Our platform is designed to streamline workflows and enhance productivity.
            
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#73C6B6',
    padding: '5%',
    textAlign: 'center',
    borderRadius: '10px',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2%',
    color: '#F0F0F0'
  },
};

export default Homediv2;
