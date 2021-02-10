import React from "react";
import Imagee from "./tv.png";
import useStyles from "./styles/tv_styles";

const Television = (props) => {
  const elements = props.element.objects;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img alt={Imagee} src={Imagee} className={classes.tv_image}></img>
      {elements.map((post) => (
        <div
          className={classes.player}
          dangerouslySetInnerHTML={{
            __html: post.metadata.video_link,
          }}
        />
      ))}
    </div>
  );
};

export default Television;
