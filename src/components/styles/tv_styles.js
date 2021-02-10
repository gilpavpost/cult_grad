import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
      position: "relative",
  },
  player: {
    zIndex: "3000",
    position: "absolute",
    top: "4px",
    left: "15px",

    
  },
  tv_image: {
    height: "444px",
    width: "675px",
    zIndex: "2000",
  },
}));

export default useStyles;