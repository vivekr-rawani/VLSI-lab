

import { Box, Link, Typography } from "@mui/material"

const MoveStuffAround = () => {
    return (
        <>
            <Box style={{ margin: '30px 0px', backgroundColor : '#f3ffff', padding : '20px 15px' }}>
                <Box sx={{ borderTop: '3px solid black' }}>
                    <Typography variant="h6">News</Typography>
                    <Box style={{ padding : '5px'}}>
                    <Typography>News 1</Typography>
                    <Typography>News 2</Typography>
                    <Typography>News 3</Typography>
                    <Typography>News 4</Typography>
                    <Link href='#'> More news...</Link>
                    </Box>
                    
                </Box>
                <Box sx={{ borderTop: '3px solid black' }}>
                    <Typography variant="h6">Events</Typography>
                    <Box style={{ padding : '5px'}}>
                    <Typography>Event 1</Typography>
                    <Typography>Event 2</Typography>
                    <Typography>Event 3</Typography>
                    <Typography>Event 4</Typography>
                    <Link href='#'> More news...</Link>
                    </Box>
                   
                </Box>
                <Box sx={{ borderTop: '3px solid black' }}><Typography variant="h6">Recent Publications</Typography>
                    <marquee direction="up" style={{ height: "300px", marginTop: '.5rem' }}>
                        <Box sx={{ textAlign: "justify" }}>
                            <Typography variant="body1" color='red'> Detailed List...</Typography>
                            <Typography variant="body2">a</Typography>
                            <Typography variant="body2">b</Typography>
                            <Typography variant="body2">c</Typography>
                            <Typography variant="body2">d</Typography>
                            <Typography variant="body2">e</Typography>

                        </Box>
                    </marquee>
                </Box>


            </Box>
        </>
    )
}

export default MoveStuffAround