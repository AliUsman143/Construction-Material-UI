"use client";
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

const HeroSection = styled(Box)({
  height: "100vh", // Full viewport height
  display: "flex", // Flexbox for centering content
  flexDirection: "column", // Column layout
  justifyContent: "center", // Center vertically
  alignItems: "center", // Center horizontally
  backgroundImage: 'url("/images/1-1.png")', // Background image
  backgroundSize: "cover", // Cover the whole area
  backgroundPosition: "center", // Center the background image
  color: "#fff", // Text color
  textAlign: "center", // Center align text
  padding: "0 20px", // Padding for responsiveness
});

const HeroHeading = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem", // Responsive font size for small screens
  },
}));
const Herohanding2 = styled(Typography)(({theme}) => ({
  fontSize: "6rem",
  fontWeight: "bold",
  marginBottom: "60px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "4rem",
  },
}));
const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  marginBottom: "40px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem", // Adjust font size on smaller screens
  },
}));

const CTAButton = styled(Button)({
  backgroundColor: "#ff4081",
  padding: "10px 30px",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "#ff79b0", // Hover effect for button
  },
});

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroHeading variant="h1">Welcome to Our Website</HeroHeading>
        {/* <Herohanding2>dvfd</Herohanding2> */}
        <HeroSubtitle variant="h5">
          We build amazing digital experiences
        </HeroSubtitle>
        <CTAButton variant="contained">Get Started</CTAButton>
      </Container>
    </HeroSection>
  );
};

export default Hero;
