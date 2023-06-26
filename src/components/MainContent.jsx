
import { Grid, Typography } from "@mui/material"
import './styles.css'
import People from "./People"
import MoveStuffAround from "./News"
import Projects from "./Projects"
import Hardware from "./Hardware"
import Software from "./Software"
import Facilities from "./Facilities"
import Courses from "./Courses"
function MainContent() {
    return (
        <>
            <div className="lab-title">VLSI DESIGN LAB</div>
            <Grid container>
                <Grid item md={9} xs={12}>
                    <div className="content-wrapper">
                        <Courses />
                        <Facilities />
                        <Projects />
                        <People />
                    </div>
                </Grid>
                <Grid item md={3} xs={0}>
                    <MoveStuffAround />
                </Grid>
            </Grid>

        </>
    )
}

export default MainContent