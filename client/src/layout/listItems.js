// React Imports
import React from "react";
// import { connect } from "react-redux"; // necessary to connect the state
import { Link } from "react-router-dom";

// Material UI Buttons
import { ListItem, ListItemIcon, ListItemText, HomeIcon, AssignmentIcon} from "@material-ui/core/ListItem";

export const mainListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader> */}
    <Link to="/settings">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    </Link>
  </div>
);