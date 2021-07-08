import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CachedIcon from "@material-ui/icons/Cached";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import GetAppIcon from "@material-ui/icons/GetApp";

import { useStyles } from "./profileCard.styles";

const ProfileCard = ({
  id,
  user,
  hashTag,
  time,
  tweet,
  noMessages,
  noResent,
  noLikes,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.container}>
        <CardContent className={classes.header}>
          <CardMedia
            className={classes.profileImage}
            component="img"
            alt="Profile image"
            height="100"
            image={`https://source.unsplash.com/random/200x200?sig=${id * 2}`}
            title="Contemplative Reptile"
          />
          <Box className={classes.headerTitle}>
            <Typography gutterBottom variant="subtitle1">
              {user} <span>{hashTag}</span> <span>{time}</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {tweet}
            </Typography>
          </Box>
        </CardContent>
        <CardMedia
          className={classes.postImage}
          component="img"
          alt="Post image"
          image={`https://source.unsplash.com/random/400x400?sig=${id}`}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions className={classes.iconsContainer}>
        <Box className={classes.iconContainer}>
          <ChatBubbleOutlineIcon />
          <span className={classes.span}>{noMessages}</span>
        </Box>
        <Box className={classes.iconContainer}>
          <CachedIcon />
          <span className={classes.span}>{noLikes}</span>
        </Box>
        <Box className={classes.iconContainer}>
          <FavoriteBorderIcon />
          <span className={classes.span}>{noResent}</span>
        </Box>
        <Box className={classes.iconContainer}>
          <GetAppIcon />
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
