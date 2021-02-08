import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { Link as LinkURL } from "react-router-dom";
const iconSize = "24px";

const sections = [
  { icon: "el:vkontakte", title: "Vkontakte" },
  { icon: "bi:instagram", title: "Instagram" },
  { icon: "bi:twitter", title: "Twitter" },
  { icon: "brandico:facebook-rect", title: "Facebook" },
  { icon: "bx:bxl-ok-ru", title: "Odnoklassniki" },
  { icon: "bi:youtube", title: "Youtube" },
];

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-around   ",
    backgroundColor: "#616161",
    width: "100%",
    padding: "0px",
  },
  text: {
    fontFamily: "'Playfair Display', serif",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          {sections.map((section) => {
              return (
                  <div
                      style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                      }}
                  >
                      <span
                          className="iconify"
                          data-icon={section.icon}
                          data-inline="true"
                          data-width={iconSize}
                          data-height={iconSize}
                      ></span>
                      <Typography>{section.title}</Typography>
                  </div>
              );
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
