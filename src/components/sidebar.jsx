import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';

const SideBar = () => {
  return (
    <div>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText>
                    <Typography variant='body1'>
                      Allie
                    </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </div>
  );
}
 
export default SideBar;