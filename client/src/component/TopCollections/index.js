import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TopCollectionCard from './TopCollectionCard';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    container: {
      justifyContent: "center",
      
    },
    item: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      textAlign: "-webkit-center",
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
    root: {
      maxWidth: 1400,
      margin: "auto",
    }
  }));

  function TopCollections() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title} component="h2">
              Top Collections
            </Typography>
            <Grid container className={classes.container}>
            {
                items.map(item => {
                return (<Grid item sm={6} md={4} lg={3} key={item.id} className={classes.item}>
                    <TopCollectionCard data={item}/>
                </Grid>);
                })
            }
            </Grid>
        </div>
    );
  }

  export default TopCollections;
  

  const items = [
    {
      id: 0,
      title: "7 Day Volume",
      lists:[
        {
          id: 0,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 1,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 2,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 3,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 4,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 5,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 6,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 7,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 8,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 9,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
      ],
    },
    {
      id: 1,
      title: "By Total Volume",
      lists:[
        {
          id: 0,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 1,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 2,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 3,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 4,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 5,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 6,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 7,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 8,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 9,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
      ],
    },
    {
      id: 2,
      title: "By 7 Day Average Price",
      lists:[
        {
          id: 0,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 1,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 2,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 3,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 4,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 5,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 6,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 7,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 8,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 9,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
      ],
    },
    {
      id: 3,
      title: "By Owner Count",
      lists:[
        {
          id: 0,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 1,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 2,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 3,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 4,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 5,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 6,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 7,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 8,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
        {
          id: 9,
          avatar : "assets/3.jpg",
          name: "Bored Ape Yacht Club",
          price: "24,958.01 ETH",
        },
      ],
    },
  ]