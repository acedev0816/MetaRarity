import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    margin: 10,
  },
  price: {
    textAlign: "justify",
  },
  number: {
    textAlign: "left",
    color: "blue",
  },
  headerTitle: {
    color: "darkgray",
  },
  header: {
    marginLeft: 10,
    marginRight: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "crimson",
  }
});

export default function NFTCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={ classes.header }>
        <Typography className={classes.number}>
            #{props.data.id}
        </Typography>
        <Typography className={classes.headerTitle}>
            {props.data.headerTitle}
        </Typography>
      </div>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.title} component="h5">
            {props.data.title}
          </Typography>
          <Typography className={classes.price} variant="body2" color="textSecondary" component="p">
            {props.data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}