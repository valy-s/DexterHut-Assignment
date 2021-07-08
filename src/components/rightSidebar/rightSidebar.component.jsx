import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import SearchBar from "../searchBar/searchBar.component";
import TrendingCard from "../trendingCard/trendingCard.component";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./rightSidebar.styles";
import { data } from "./data";

const RightSidebar = ({ container }) => {
  const classes = useStyles();
  return (
    <div className={classes.drawerRight} aria-label="advertisment">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden xsDown implementation="css">
        <Drawer
          key="drawer2"
          container={container}
          variant="permanent"
          open
          anchor={"right"}
          classes={{
            paper: classes.drawerPaperRight,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div className={classes.toolbar}>
            <SearchBar />
          </div>
          <Divider />
          <Typography gutterBottom variant="h4">
            Trends for you
          </Typography>
          {data.map((item) => (
            <TrendingCard
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.content}
              twets={item.tweets}
            />
          ))}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default RightSidebar;
