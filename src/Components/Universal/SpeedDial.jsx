import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { redirect } from "react-router-dom";

const actions = [
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    redirect: "https://www.linkedin.com/in/swati-mor-32bb14206/",
  },
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    redirect: "https://www.instagram.com/immi.zest/",
  },
  {
    icon: <YouTubeIcon />,
    name: "YouTube",
    redirect: "https://www.youtube.com/channel/UCG1bwyOJ-WYhsfj1Ts_j5iw",
  },
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    redirect: "https://www.facebook.com/ImmiZest/",
  },
  {
    icon: <WhatsAppIcon />,
    name: "WhatsApp",
    redirect: "https://www.facebook.com/ImmiZest/",
  },
];

export default function SocialMediaSpeedDial() {
  return (
    <Box
      className=" fixed top-0 z-50 bottom-0 h-full w-full "
      sx={{ transform: "translateZ(0px)", flexGrow: 1 }}
    >
      <SpeedDial
        ariaLabel="SpeedDial social media example"
        sx={{ position: "fixed", bottom: "16px", right: "16px" }}
        icon={<ConnectWithoutContactIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              window.open(action.redirect, "_blank");
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
