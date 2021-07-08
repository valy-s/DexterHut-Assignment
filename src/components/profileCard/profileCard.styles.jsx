import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "1em auto",
    padding: "0px",
  },
  container: {
    padding: "0px",
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "left",
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    marginRight: "1em",
  },
  postImage: {
    height: "400px",
    width: "90%",
    borderRadius: "10px",
    objectFit: "cover",
    margin: "0 2em",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "0 2em",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  span: {
    marginLeft: "5px",
  },
});
