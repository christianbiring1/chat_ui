import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Person3 } from '@mui/icons-material';

const iconStyle = {
  fontSize: '2.7rem',
  minWidth: '40px',
  color: '#000'
}

const mobLinkStyles = {
  fontSize: '1.6rem'
};

const SideBar = () => {
  return (
    <div>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person3 style={ iconStyle } />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant='body1' style={ mobLinkStyles }>
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