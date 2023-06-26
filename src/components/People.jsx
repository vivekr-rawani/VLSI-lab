import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

export default function BasicList() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <div className="people">
            <Typography variant='h4' className='sub-heading'>
                People
            </Typography>
                    <List dense={true} style={{paddingTop:'0px'}}>
                        <ListItem>
                            <ListItemButton component="a" href="https://nitjsr.ac.in/people/profile/EC103">
                                <ListItemText primary="Dr. Amit Prakash" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="https://nitjsr.ac.in/people/profile/EC110">
                                <ListItemText primary="Dr. Kunal Singh" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="https://nitjsr.ac.in/people/profile/EC106">
                                <ListItemText primary="Dr. Basanta Bhomik" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="#">
                                <ListItemText primary="Dr. Chandradeep Singh" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="https://nitjsr.ac.in/people/profile/EC120">
                                <ListItemText primary="Dr Amit Kumar" />
                            </ListItemButton>
                        </ListItem>

                    </List>
                
                </div>
        </Box>
    );
}
