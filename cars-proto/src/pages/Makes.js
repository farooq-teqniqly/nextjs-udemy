import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function MakesPage() {
  return (
    <div>
      <Typography variant="h2">All Makes</Typography>
      <nav>
        <List>
          <ListItem>
            <ListItemButton component={Link} to="/models">
              <ListItemText primary="Ford"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="GMC"></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  );
}

export default MakesPage;
