import { Typography, Link } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';


const peopleList = [
    {
        name : 'Dr. Amit Prakash' ,
        post : '' ,
        profileLink : 'https://nitjsr.ac.in/people/profile/EC103'
    },
    {
        name : 'Dr. Kunal Singh' ,
        post : 'Professor Incharge' ,
        profileLink : ''
    },
    {
        name : 'Dr. Basanta Bhomik' ,
        post : 'Professor Incharge' ,
        profileLink : 'https://nitjsr.ac.in/people/profile/EC106'
    },
    {
        name : 'Dr. Chandradeep Singh' ,
        post : '' ,
        profileLink : '#'
    },
    // {
    //     name : 'Dr. Amit Kumar' ,
    //     post : 'Assistant Professor' ,
    //     profileLink : 'https://nitjsr.ac.in/people/profile/EC120'
    // },
    {
        name : 'Aditya Kumar Nagmani' ,
        post : '' ,
        profileLink : '#'
    },
    //Project Associate - C2S
    {
        name : 'Priya Ranjan Satapathi' ,
        post : '' ,
        profileLink : '#'
    },
    {
        name : 'Mr. Reyan Akhtar' ,
        post : '' ,
        profileLink : '#'
    },
]

export default function BasicList() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <div className="people">
            <Typography variant='h4' className='sub-heading'>
                People
            </Typography>

            
                    <List dense={true} style={{paddingTop:'0px'}}>

                    {
                        peopleList.map((people, i)=>{
                            return(
                                <ListItem key={i}>
                            <ListItemButton component={Link} href={people.profileLink}>
                                <ListItemText primary={people.name} secondary={people.post} />
                            </ListItemButton>
                        </ListItem>
                            )
                        })
                    }
                    </List>
                </div>
        </Box>
    );
}
