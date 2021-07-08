import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f77aa",
    height: "100vh",
    maxWidth: "100vw",
  },

  container: {
    padding: "5rem",
    background: "#D0D0D0",
    borderRadius: "0.5em",
    [theme.breakpoints.down("xs")]: {
      padding: "5rem 2rem",
    },
  },
}));
