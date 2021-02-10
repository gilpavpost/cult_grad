import React from "react";
import { Toolbar, AppBar, Typography, Hidden, IconButton } from "@material-ui/core";
import { Link as LinkURL } from "react-router-dom";
import useStyles from "./styles/header_style";
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  const classes = useStyles();

  const sections = [
    { title: "Главная", url: "/" },
    { title: "Лента событий", url: "Newstape" },
    { title: "Народный репортер", url: "#" },
    { title: "Видео", url: "Video" },
    { title: "Реклама", url: "#" },
    { title: "Каталог предприятий", url: "#" },
    { title: "Контакты", url: "About" },
  ];

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Hidden mdUp>
          <Typography>СМИ Культурный Город</Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Hidden smDown>
          {sections.map((section) => (
              <LinkURL className={classes.urlStyle} to={section.url}>
                {section.title}
              </LinkURL>
       
          ))}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
