import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Collections from '../../component/collections';
import MRCollections from '../../component/MRCollections';
import TopCollections from '../../component/TopCollections';

const useStyles = makeStyles((theme) => ({
    container: {
        justifyContent: "center",
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="lg">
                <Collections/>
                <MRCollections/>
            </Container>
            <TopCollections/>
        </>
    );

}
export default Home;