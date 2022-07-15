import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const DisplayTask =() => {

    return (
        <>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Photos" />
      </ListItem>
      
      <ListItem>
        
        <ListItemText primary="Vacation"  />
      </ListItem>
    </List>
        </>
    );
}

export default DisplayTask