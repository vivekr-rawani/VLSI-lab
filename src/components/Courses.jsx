import {Box, Typography} from '@mui/material'


function Courses() {
  const labCourses = 'VLSI Design (PG) EC4130, VLSI Design (UG) EC1502'.split(',')
  const theoryCourses = 'VLSI Architecture (PG) EC4235, Digital VLSI Design (PG) EC4234, Analog VLSI Design (PG) EC4126 , VLSI Technology (PG) EC4131, VLSI Design (UG) EC1501'.split(',')
  return (
    <Box className="courses" fontStyle={{bgcolor: 'background.paper'}} >
       <Typography variant="h4" className="sub-heading">Courses to cater </Typography>
       <Box sx={{padding : '3px 15px'}} >
       <Typography variant='h6'>Lab Courses</Typography>
       <ul>
        {
          labCourses.map((c, i) => <Typography component='li' key={i}>{c}</Typography>)
        }
       </ul>
       <Typography variant='h6'>Theory Courses</Typography>
       <ul>
        {
          theoryCourses.map((c, i) => <Typography component='li' key={i}>{c}</Typography>)
        }
       </ul>
       </Box>
    </Box>
  )
}

export default Courses