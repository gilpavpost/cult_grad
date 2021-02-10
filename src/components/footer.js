import React from "react";
import { Toolbar, AppBar, Typography, Hidden } from "@material-ui/core";
import useStyles from "./styles/footer_styles";
import sections from "./util/footer_link";
const iconSize = "24px";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" maxWidth="sm" className= {classes.appbar}>
        <Toolbar className={classes.toolbar}>
          {sections.map((section) => {
            return (
              <a href={section.link} className={classes.link}>
                <span
                  className="iconify"
                  data-icon={section.icon}
                  data-inline="true"
                  data-width={iconSize}
                  data-height={iconSize}
                ></span>
                <Hidden smDown>
                  <Typography>{section.title}</Typography>{" "}
                </Hidden>
              </a>
            );
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
