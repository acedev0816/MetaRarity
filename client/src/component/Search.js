/* eslint-disable no-use-before-define */
import React from 'react';
import { useHistory } from "react-router-dom";
import { useTheme, alpha, makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ButtonBase from '@material-ui/core/ButtonBase';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 20,
    
  },
  button: {
    fontSize: "20px",
    padding: theme.spacing(3),
    width: '100%',
    textAlign: 'right',
    color: '#67696c',

    '&:hover,&:focus': {
      color: 'black',
    },
    '& span': {
      width: '100%',
      marginLeft: theme.spacing(3),
    },
    '& svg': {
      width: 24,
      height: 24,
    },
  },
  tag: {
    marginTop: 3,
    height: 20,
    padding: '.15em 4px',
    fontWeight: 600,
    lineHeight: '15px',
    borderRadius: 2,
  },
  popper: {
    border: '1px solid rgba(27,31,35,.15)',
    boxShadow: '0 3px 12px rgba(27,31,35,.15)',
    borderRadius: 3,
    width: 400,
    zIndex: 1,
    fontSize: 13,
    color: '#586069',
    backgroundColor: '#f6f8fa',
  },
  header: {
    borderBottom: '1px solid #e1e4e8',
    padding: '8px 10px',
    fontWeight: 600,
  },
  inputBase: {
    padding: 10,
    width: '100%',
    borderBottom: '1px solid #dfe2e5',
    '& input': {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      padding: 8,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      border: '1px solid #ced4da',
      fontSize: 14,
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  paper: {
    boxShadow: 'none',
    margin: 0,
    color: '#586069',
    fontSize: 13,
  },
  option: {
    minHeight: 'auto',
    alignItems: 'flex-start',
    padding: 8,
    '&[aria-selected="true"]': {
      backgroundColor: 'transparent',
    },
    '&[data-focus="true"]': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  popperDisablePortal: {
    position: 'relative',
  },
  iconSelected: {
    width: 17,
    height: 17,
    marginRight: 5,
    marginLeft: -2,
  },
  searchList: {
    display: "flex",
    alignItems: "center",
  },
  idNum: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  color: {
    width: 14,
    height: 14,
    flexShrink: 0,
    borderRadius: 3,
    marginRight: 8,
    marginTop: 2,
  },
  text: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  close: {
    opacity: 0.6,
    width: 18,
    height: 18,
  },
}));

export default function Search() {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'github-label' : undefined;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <ButtonBase
          disableRipple
          className={classes.button}
          aria-describedby={id}
          onClick={handleClick}
        >
          <FormatListNumberedIcon />
          <span>All Collections</span>
        </ButtonBase>
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        className={classes.popper}
      >
        <div className={classes.header}>By 7 Day Volume</div>
        <Autocomplete
          open
          onClose={handleClose}
          classes={{
            paper: classes.paper,
            option: classes.option,
            popperDisablePortal: classes.popperDisablePortal,
          }}
          onChange={(event, newValue) => {
            history.push("/cardlist");
          }}
          renderOption={(option) => (
            <div className={classes.searchList}>
              <span className={classes.idNum}>{option.color}</span>
              <Avatar alt="" src={option.image} />
              <div className={classes.text}>
                {option.name}
                <br />
                {option.description}
              </div>
            </div>
          )}
          options={labels}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              autoFocus
              className={classes.inputBase}
            />
          )}
        />
      </Popper>
    </React.Fragment>
  );
}

// From https://github.com/abdonrd/github-labels
const labels = [
  {
    name: 'good first issue',
    color: '#7057ff',
    description: 'Good for newcomers',
    image: 'assets/3.jpg'
  },
  {
    name: 'good first df',
    color: '#7057ff',
    description: 'Good for newcomers',
    image: 'assets/3.jpg'
  },
  {
    name: 'dsf first issue',
    color: '#7057ff',
    description: 'sfd for newcomers',
    image: 'assets/3.jpg'
  },
  {
    name: 'good sfds issue',
    color: '#7057ff',
    description: 'Good for newcomers',
    image: 'assets/3.jpg'
  },
  {
    name: 'good sfd issue',
    color: '#7057ff',
    description: 'Good for newcomers',
    image: 'assets/3.jpg'
  },
  {
    name: 'good sdf issue',
    color: '#7057ff',
    description: 'Good for newcomers',
    image: 'assets/3.jpg'
  },
  {
    name: 'good sfd issue',
    color: '#7057ff',
    description: 'Good for newcomers',
    image: 'assets/3.jpg'
  },
  {
    name: 'good sdf issue',
    color: '#7057ff',
    description: 'Good for newcomers',
    image: 'assets/3.jpg'
  },

];