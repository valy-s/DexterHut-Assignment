import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./trendingCard.styles";

const TrendingCard = ({ id, title, text, twets }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.container}>
        <CardMedia
          className={classes.image}
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={`https://source.unsplash.com/random/200x200?sig=${id}`}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="subtitle1">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography gutterBottom variant="subtitle1">
          {twets.toLocaleString()} are Tweting about this
        </Typography>
      </CardActions>
    </Card>
  );
};

export default TrendingCard;
