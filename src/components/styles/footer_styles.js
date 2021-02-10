import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  appbar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#616161",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#616161",
    width: "60%",
    padding: "0px",
    // eslint-disable-next-line
    ["@media (max-width:960px)"]: {
      width: "60%",
      minHeight: "32px",
    },
  },
  text: {
    fontFamily: "'Playfair Display', serif",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "#eeeeee",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "&:hover": { color: "#96E6B3", textDecoration: "none" },
  },
});

export default useStyles;
