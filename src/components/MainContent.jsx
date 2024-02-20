
import { Grid,  } from "@mui/material"
import './styles.css'
import People from "./People"
import MoveStuffAround from "./News"
import Projects from "./Projects"
import Facilities from "./Facilities"
import Courses from "./Courses"
function MainContent() {
    return (
        <>
            <div className="lab-title">Solid State Electronics and VLSI Lab</div>
            <Grid container>
                <Grid item md={8} xs={12}>
                    <div className="content-wrapper">
                        <Courses />
                        <Facilities />
                        <Projects />
                        <People />
                    </div>
                </Grid>
                <Grid item md={4} xs={0} className="news-section">
                    <MoveStuffAround />
                </Grid>
            </Grid>

        </>
    )
}

export default MainContent