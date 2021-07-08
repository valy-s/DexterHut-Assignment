import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "0",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: "#0f77aa",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100%  - 300px )`,
      marginRight: "300px",
    },
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px - 300px )`,
      marginLeft: drawerWidth,
      marginRight: "300px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolbar__container: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    maxWidth: `calc(100% - 300px)`,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px - 300px )`,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
}));
