import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/download" className={classes.link}>
              Downloads
            </Link>

            <Link to="/add-client" className={classes.link}>
              Clients
            </Link>

            <Link to="/add-project" className={classes.link}>
              Contracts
            </Link>
            <Link to="/add-invoice" className={classes.link}>
              Invoice
            </Link>
           
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
