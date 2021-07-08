import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  icon: {
    marginRight: "5rem",
    color: "#0f77aa",
    width: 50,
    height: 50,
  },
  link: {
    textDecoration: "none",
    fontWeight: "900",
    color: "black",
  },
}));
