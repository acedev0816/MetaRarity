import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CollectionCard from './collectionCard';
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

    }
  }));

  function Collections() {
    const classes = useStyles();
  
    return (
        <>
            <Typography className={classes.title} component="h2">
                Newest Collections Added
            </Typography>
            <Grid container className={classes.container}>
            {
                items.map(item => {
                return (<Grid item sm={6} md={4} lg={3} key={item.id} className={classes.item}>
                    <CollectionCard data={item}/>
                </Grid>);
                })
            }
            </Grid>
        </>
    );
  }

  export default Collections;
  

  const items = [
    {
      id: 0,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 1,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 2,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 3,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 4,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 5,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 6,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 7,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 8,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 9,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 10,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
    {
      id: 11,
      title: "Bored Ape Yc #5230",
      headerTitle: "CK_1337_Vault",
      description: "The Playboy Rabbitars are a lagomorphic-themed civilization of 11,953 unique, non-fungible rabbits inspired by Playboy iconography, heritage and lore. In the context of the metaverse, the Rabbitars are NFTs that live on the Ethereum Blockchain as ERC...",
      img: "assets/contemplative-reptile.jpg",
      date: "19 Nov 2021",
      owner: "3516",
      volume: "381.54 ETH",
      avatar: "assets/3.jpg",
    },
  ]