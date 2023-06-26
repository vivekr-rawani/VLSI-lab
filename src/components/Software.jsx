import { Typography } from "@mui/material"


function Software() {
    const software = 'Cadence, Synopsis, Mentor Graphics, Vivado'.split(',')
  return (
    <div>
    <Typography variant="h5"> Software</Typography>
      <ul>
        {
          software.map( (h, index) => <li key={index}>{h}</li>)
        }
      </ul>
    </div>
  )
}

export default Software