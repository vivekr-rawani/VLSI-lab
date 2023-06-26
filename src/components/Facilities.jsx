import { Typography, Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody } from "@mui/material"
import hardware1 from '../assets/hardware1.jpg'
import hardware2 from '../assets/hardware2.jpg'


const rows = [
    {
        name : 'Artix-7 FPGA',
        desc : 'The AC701 evaluation board for the Artix-7 FPGA provides a hardware environment for developing and evaluating designs targeting the Artix-7 XC7A200T-2FBG676C FPGA. The AC701 board provides features common to many embedded processing systems, including a DDR3 SODIMM memory, an 4-lane PCI Express interface, a tri-mode Ethernet PHY, general purpose I/O, and a UART interface.',
        img : hardware1
    },
    {
        name : 'Basys-3 FPGA Board',
        desc : 'The Basys-3 is an entry-level FPGA development board designed exclusively for the Vivado® Design Suite featuring the Xilinx® Artix®-7-FPGA architecture. Basys-3 is the newest addition to the popular Basys line of FPGA development boards for students or beginners just getting started with FPGA technology. Board has complete ready-to-use hardware, a large collection of on-board I/O devices, all required FPGA support circuits and development tools.',
        img : hardware2
    }
    
];


function Facilities() {
    return (
        <Box className="facilities" marginTop={'3rem'} >
            <Typography variant="h4" className="sub-heading">Facilities </Typography>
            <TableContainer component={Paper}  >
                <Table sx={{ minWidth: 650 }} aria-label="simple table" bgcolor='#F3FFFF'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="cneter">Description</TableCell>
                            <TableCell align="right">Instruments/Softwares</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="justify">{row.desc}</TableCell>
                                <TableCell align="right"><img  width={'250px'} src={row.img} alt={row.name}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Facilities
