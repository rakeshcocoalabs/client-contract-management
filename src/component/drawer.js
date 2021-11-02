import React, { useState } from "react";

import { Menu as MenuIcon } from "@material-ui/icons";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  
 //makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

//const useStyles = makeStyles(()=>({
//     link:{
//         textDecoration:"none",
//         color: "blue",
//         fontSize: "20px",
//     },
//     icon:{
//         color: "white"
//     }
// }));

function DrawerComponent() {
//const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/add-client">Clients</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/add-project">Contracts</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/download">Downloads</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;