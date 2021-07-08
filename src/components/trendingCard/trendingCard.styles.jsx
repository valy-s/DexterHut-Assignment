import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: "1em auto",
    minHeight: "150px",
  },
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    borderBottom: "1px solid gray",
    borderRadius: "10px",
    height: "100px",
  },
  image: {
    height: "100%",
    width: "30%",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  content: {
    textAlign: "left",
    width: "70%",
    borderRadius: "10%",
  },
});
