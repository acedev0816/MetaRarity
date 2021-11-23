import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";


import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    flexGrow: "1",
  },
  logoText: {
    cursor: "pointer",
    color: "black",
    fontSize: 30,
    marginLeft: theme.spacing(1),
  },
  logoImg: {
    cursor: "pointer",
    maxHeight: 50,
    padding: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: "#67696c",
    fontSize: 20,
    height: 70,
    padding: 20,
    // marginLeft: theme.spacing(5),
    "&:hover": {
      color: "black",
      // borderBottom: "1px solid black",
      backgroundColor: "lightgray",
    },
    "&.active": {
      borderBottom: "2px solid black",
      color: "black",
    },
  },
  root: {
    backgroundColor: "white",
  }
}));

function Navbar() {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [selectIndex, setValue] = React.useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  function handleChangeIndex(index) {
    setValue(index);
  };
  return (
    <AppBar position="static" className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <div className={classes.logo} onClick={()=> {history.push("/");}}>
            <img src="assets/logo.png" alt="logo" className={classes.logoImg} />
            <Typography variant="h4" className={classes.logoText}>
              MetaRarity
            </Typography>
        </div>
        <div>
          <Search/>
        </div>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link + (selectIndex ==0?" active": "")} onClick={() => handleChangeIndex(0)}>
              Home
            </Link>
            <Link to="/faq" className={classes.link + (selectIndex ==1?" active": "")} onClick={() => handleChangeIndex(1)}>
              List Your Project
            </Link>
            <Link to="/contact" className={classes.link + (selectIndex ==2?" active": "")} onClick={() => handleChangeIndex(2)}>
              Contact Us
            </Link>
            <Link to="/about" className={classes.link + (selectIndex ==3?" active": "")} onClick={() => handleChangeIndex(3)}>
              About
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
