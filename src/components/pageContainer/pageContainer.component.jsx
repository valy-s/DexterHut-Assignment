import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useLocation } from "react-router-dom";

import Menu from "../menu/menu.component";
import RightSidebar from "../rightSidebar/rightSidebar.component";

import { useStyles } from "./pageContainer.styles";

function PageContainer(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar__container}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {location.pathname.slice(1).toLocaleUpperCase()}
          </Typography>
          <Button variant="contained" color="secondary" onClick={props.onClick}>
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        container={container}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Divider />
        {props.children}
      </main>
      <RightSidebar container={container} />
    </div>
  );
}

export default PageContainer;
