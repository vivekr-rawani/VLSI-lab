import { Typography, Link } from '@mui/material';
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
                            <ListItemButton component={Link} href="https://nitjsr.ac.in/people/profile/EC103">
                                <ListItemText primary="Dr. Amit Prakash (Professor Incharge)" secondary='Head of Department' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="https://nitjsr.ac.in/people/profile/EC110">
                                <ListItemText primary="Dr. Kunal Singh (Professor Incharge)"secondary='Assistant Professor' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="https://nitjsr.ac.in/people/profile/EC106">
                                <ListItemText primary="Dr. Basanta Bhomik" secondary='Assistant Professor'/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="#">
                                <ListItemText primary="Dr. Chandradeep Singh"secondary='Assistant Professor' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="https://nitjsr.ac.in/people/profile/EC120">
                                <ListItemText primary="Dr Amit Kumar"secondary='Assistant Professor' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="#">
                                <ListItemText primary="Mr Reyan Akhtar"secondary='Lab Incharge' />
                            </ListItemButton>
                        </ListItem>

                    </List>
                
                </div>
        </Box>
    );
}
