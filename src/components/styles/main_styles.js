import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appbar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#616161",
  },
  container: {
backgroundColor: "yellow",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text_big: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "32px",

  }
});

export default useStyles;
