import { Typography } from "@mui/material"


function Hardware() {
  const hardware = 'Zybo Z7: Zynq-7000 ARM/FPGA SoC Development Board, Nexys 4 DDR Artix-7 FPGA, Basys 3 Artix-7 FPGA Board, PYNQ-Z1'.split(',')
  return (
    <div>
    <Typography variant="h5"> Hardware</Typography>
      <ul>
        {
          hardware.map( (h, index) => <li key={index}>{h}</li>)
        }
      </ul>
    </div>
  )
}

export default Hardware