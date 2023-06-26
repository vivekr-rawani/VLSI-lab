import { Box } from '@mui/material';
import { Typography } from '@mui/material';
function Projects() {
  return (
    <Box className="project" fontStyle={{width: '100%', maxWidth: 650, bgcolor: 'background.paper'}} marginTop={'3rem'}>
       <Typography variant="h4" className="sub-heading">Projects </Typography>
      <ol>
        <li>Space Applications Centre (SAC) Ahmedabad, ISRO, Government of India- &#34;Channel Coding for Satellite Communication&#34;-1 year (2023-24), &#x20B9; 3.3 Lakh (Ongoing)</li>
        <li>Chips to Start-Up (C2S) Programme of MeitY- “Design and development of System on Chip based next generation IoT System for Industry 4.0 with Functional Safety and Security Features”, 5 year (2023-28), &#x20B9; 96.0 Lakh (Ongoing)</li>
      </ol>
    </Box>
  )
}

export default Projects