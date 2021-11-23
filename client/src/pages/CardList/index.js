import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import Container from '@material-ui/core/Container';
import NFTCard from './NFTCard';

const useStyles = makeStyles((theme) => ({
  
  container: {
    justifyContent: "center",
  },
  item: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "-webkit-center",
  },
  pagination: {
    justifyContent: "center",
    marginTop: theme.spacing(5),
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  paginationList: {
    '& ul': {
      justifyContent: "center",
    },
  }
  
}));

function CardList() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.container}>
        {
          items.map(item => {
            return (<Grid item sm={6} md={4} lg={3} key={item.id} className={classes.item}>
              <NFTCard data={item}/>
            </Grid>);
          })
        }
      </Grid>
      <div className={classes.pagination}>
        <Pagination className={classes.paginationList} count={10} color="primary" />  
      </div>
    </Container>
  );
}

export default CardList;

const items = [
  {
    id: 0,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 1,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 2,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 3,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 4,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 5,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 6,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 7,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 8,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 9,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 10,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
  {
    id: 11,
    title: "Bored Ape Yc #5230",
    headerTitle: "CK_1337_Vault",
    description: "Lizards are a widespread group of squamate reptiles",
    img: "assets/4.png",
    price: "2500 ETH",
  },
]
