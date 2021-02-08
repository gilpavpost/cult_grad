import React from "react";
import { Toolbar, Box, Link, Divider, AppBar } from "@material-ui/core";
import { Link as LinkURL } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  urlStyle: {
    color: "#eeeeee",
    textDecoration: "none",
    textTransform: "uppercase",
    fontFamily: "'Playfair Display', serif", 
     },

  toolbar: {
    backgroundColor: "#616161",
    display: "flex",
    justifyContent: "space-around",
  },
}));

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
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {sections.map((section) => (
            <Link
              className={classes.link}
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              // className={classes.toolbarLink}
            >
              <LinkURL className={classes.urlStyle} to={section.url}>
                {section.title}
              </LinkURL>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
  );
}
export default Header;
