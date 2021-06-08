import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import SectorButton from './sectorButton'

function FullWidthGrid() {
  // const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} style={{height: '100vh'}}>
        <Grid item sm={12} md={8}>
          <Paper className="paper">
            <SectorButton my='auto'/>
          </Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Paper className="paper" >sm=12 md=4</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ReactDOM.render(<FullWidthGrid />, document.getElementById("root"));
