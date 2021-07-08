import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MessageIcon from "@material-ui/icons/Message";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { useStyles } from "./menu.styles";

const Menu = ({ mobileOpen, handleDrawerToggle, container }) => {
  const primaryIcons = [
    <HomeIcon />,
    <AccountCircleIcon />,
    <SettingsIcon />,
    <ExploreIcon />,
  ];

  const secondaryIcons = [
    <NotificationsActiveIcon />,
    <MessageIcon />,
    <BookmarksIcon />,
    <MoreHorizIcon />,
  ];
  const classes = useStyles();
  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <TwitterIcon className={classes.icon} />
      </div>
      <Divider />
      <List>
        {["Home", "Profile", "Settings", "Explore"].map((text, index) => (
          <Link
            key={text}
            className={classes.link}
            to={`/${text.toLowerCase()}`}
          >
            <ListItem button>
              <ListItemIcon>{primaryIcons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {["Notifications", "Messages", "Bookmarks", "More"].map(
          (text, index) => (
            <Link
              key={text}
              className={classes.link}
              to={`/${text.toLowerCase()}`}
            >
              <ListItem button>
                <ListItemIcon>{secondaryIcons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          )
        )}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Menu;
