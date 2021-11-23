import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    height: 550,
  },
  media: {
    height: 250,
    padding: 2,
  },
  price: {
    textAlign: "justify",
    fontSize: 14,
  },
  title: {
    color: "rgba(219, 39, 119, 1)",
    fontWeight: 700,
    fontSize: 16,
    textAlign: "left",
  },
  content: {
    padding: 10,
  },
  contentHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
  description: {
    textAlign: "left",
    fontSize: 16,
    paddingTop: 10,
  }
});

export default function TopCollectionCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
            <div className={classes.contentHead}>
                <div>
                    <Typography className={classes.title} component="h5">
                        {props.data.title}
                    </Typography>
                    <Typography className={classes.price} variant="body2" color="textSecondary" component="p">
                        Added {props.data.date}
                    </Typography>
                    <Typography className={classes.price} variant="body2" color="textSecondary" component="p">
                        Owners: {props.data.owner}
                    </Typography>
                    <Typography className={classes.price} variant="body2" color="textSecondary" component="p">
                        Total Volume: {props.data.volume}
                    </Typography>
                </div>
                <Avatar className={classes.avatar} alt="" src={props.data.avatar} />
            </div>
            <Typography className={classes.description} component="p">
                {props.data.description}
            </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}