/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-scroll";
import { Link as Redirect } from 'react-router-dom';

const NavbarComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      name: "home",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      name: "about",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      name: "testimonials",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      name: "contact",
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      name: "cart",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
          <Link to="home" smooth={true} duration={300}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={300}>
            About
          </Link>
          <Link to="testimonials" smooth={true} duration={300}>
          Testimonials
          </Link>
          <Link to="contact" smooth={true} duration={300}>
          Contact
          </Link>
          <Redirect to="/add-business" className="primary-button">Register Now</Redirect>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
            <Link to={item.name} smooth={true} duration={300}>
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            </Link>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavbarComponent;
