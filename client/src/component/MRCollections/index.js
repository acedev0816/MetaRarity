import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    maxWidth: "1050px",
    margin: "auto",
    padding: theme.spacing(2),
  },
  item: {
    padding: theme.spacing(2),
    textAlign: "-webkit-center",
    display: "flex",
    width: "200px",
    alignItems: "center",
  },
  avatar: {

  },
  title: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    fontSize: "1.875rem",
    fontWeight: 800,
    lineHeight: "2.25rem",
    color: "rgba(190, 24, 93, 1)",
  },
  name: {
    paddingLeft: 10,
    fontSize: 16,
  }
}));

function MRCollections() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} component="h2">
        More Recent Collections
      </Typography>
      <Paper className={classes.container}>
        {
          items.map(item => {
            return (<div key={item.id} className={classes.item}>
              <Avatar className={classes.avatar} alt="" src={item.avatar} />
              <Typography className={classes.name} component="p">
                {item.title}
              </Typography>
            </div>);
          })
        }
      </Paper>
    </>
  );
}

export default MRCollections;


const items = [
  {
    id: 0,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 1,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 2,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 3,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 4,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 5,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 6,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 7,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 8,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 9,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 10,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 11,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 12,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 13,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 14,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 15,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 16,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 17,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 18,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
  {
    id: 19,
    title: "Angry Meerkats",
    avatar: "assets/1.gif",
  },
]