import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    margin: "auto",
    padding: theme.spacing(0),
  },
  title: {
    textAlign: 'left',
    color: "rgba(190, 24, 93, 1)",
    fontWeight: 800,
    padding: theme.spacing(2),
  },
  list: {

  },
  listItemIdText: {
    color: "darkgray",
    fontWeight: 900,
  },
  listItemText: {
    color: "rgba(190, 24, 93, 1)",
  }
}));

export default function TopCollectionCard(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography className={classes.title} component="h2">
        {props.data.title}
      </Typography>
      <List className={classes.list}>
          {
            props.data.lists.map( item => {
              return(
                <ListItem button key={item.id}>
                  <ListItemText className={ classes.listItemIdText} primary={ "#"+ item.id}/>
                  <ListItemAvatar>
                    <Avatar alt="" src={item.avatar}/>
                  </ListItemAvatar>
                  <ListItemText className={classes.listItemText} primary={item.name} secondary={item.price} />
                </ListItem>
              );
            })
          }
      </List>
    </Paper>
  );
}