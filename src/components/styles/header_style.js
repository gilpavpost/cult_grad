import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  urlStyle: {
    color: "#eeeeee",
    textDecoration: "none !important",
    textTransform: "uppercase",
    fontFamily: "'Playfair Display', serif",
    "&:hover": { color: "#96E6B3", textDecoration: "none" },
  },
  toolbar: {
    backgroundColor: "#616161",
    display: "flex",
    width: "80%",
    justifyContent: "space-around",
    ["@media (max-width:980px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "100%",
    },
    ["@media (max-width:960px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "90%",
      justifyContent: "space-between",
    },
  },
  appbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#616161",
  },
  menuButton: {
    border: "1px solid green",
  },
}));

export default useStyles;
