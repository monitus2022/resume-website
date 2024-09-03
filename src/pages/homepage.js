import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
// import { FaDiscord } from "react-icons/fa";
import "../css/homepage.css";

import cover from "../images/cover.png";
import ff14 from "../images/14.png";
import learning from "../images/learning.png";
import experimental from "../images/experimental.png";
import questionmark from "../images/question-mark.png";

const HeaderIcon = () => {
  return (
    <Box
      component="img"
      src={cover}
      alt="Header Logo"
      sx={{ width: "100%", height: "100%", maxWidth: "500px", padding: "20px" }}
    />
  );
};

// Single box of icon
const IconBox = ({ path, imageurl, text }) => {
  return (
    <Link to={path}>
      <Box className="iconBox">
        <img src={imageurl} alt={text} className="icon" />
        <div style={{ marginTop: "10px" }}>{text}</div>
      </Box>
    </Link>
  );
};

// 2x2 grid of icons
const IconBoxes = () => {
  return (
    <Grid container spacing={5} className="iconBoxesGrid">
      <Grid size={6}>
        <IconBox path="ffxiv" imageurl={ff14} text="FF14" />
      </Grid>
      <Grid size={6}>
        <IconBox path="learning" imageurl={learning} text="Learning" />
      </Grid>
      <Grid size={6}>
        <IconBox
          path="experimental"
          imageurl={experimental}
          text="Fun Stuff"
        />
      </Grid>
      <Grid size={6}>
        <IconBox path="aboutme" imageurl={questionmark} text="About Me" />
      </Grid>
    </Grid>
  );
};

// Footer containing copyright
const Footer = () => {
  return (
    <Box className="footer">
      <div>Icons are properties of SQUARE-ENIX Ltd</div>
    </Box>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeaderIcon />
      <IconBoxes />
      <Footer />
    </div>
  );
};

export default HomePage;
