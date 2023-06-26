
import { Grid } from "@mui/material"
import './styles.css'
import People from "./People"
function MainContent() {
    return (
        <>
            <div className="lab-title">VLSI DESIGN LAB</div>
            <Grid container>
                <Grid item md={9} xs={12}>
                    <div className="content-wrapper">
                        <div className="courses">
                            <h3 className="sub-heading">Courses to cater</h3>
                        </div>
                        <div className="facilities">
                            <h3 className="sub-heading">Facilities</h3>
                            <div className="software-facility">
                                <h4>Software (HDL and EDA tools)</h4>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <br />
                            <div className="hardware-facility">
                                <h4>Hardware</h4>
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="project">
                            <h3 className="sub-heading">Project</h3>
                            <ol>
                                <li>Space Applications Centre (SAC) Ahmedabad, ISRO, Government of India- "Channel Coding for Satellite Communication"-1 year (2023-24), &#x20B9; 3.3 Lakh (Ongoing)</li>
                                <li>Chips to Start-Up (C2S) Programme of MeitY- “Design and development of System on Chip based next generation IoT System for Industry 4.0 with Functional Safety and Security Features”, 5 year (2023-28), &#x20B9; 96.0 Lakh (Ongoing)</li>
                            </ol>
                        </div>
                       <People/>
                    </div>
                </Grid>
                <Grid item md={3} xs={0}>
                    b
                </Grid>
            </Grid>

        </>
    )
}

export default MainContent