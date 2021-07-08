import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  form__container: {
    maxWidth: "350px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "0.75rem 0",
  },
  buttons__container: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2rem",
  },
});
