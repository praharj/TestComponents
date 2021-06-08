import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";

// function BookList() {
//   return (
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

function FullWidthGrid() {
  // const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          <Paper className="paper">sm=12 md=8</Paper>
        </Grid>
        <Grid item sm={12} md={4}>
          <Paper className="paper">sm=12 md=4</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

function SectorButton(){
  return (
    <div>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        Custom CSS
      </ColorButton>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Theme Provider
        </Button>
      </ThemeProvider>
      <BootstrapButton
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
      >
        Bootstrap
      </BootstrapButton>
    </div>
  );
}

// const Book=()=>{
//     return (
//       <div>
//         <p>This is a Book</p>
//         <Image></Image>
//         <Title></Title>
//       </div>
//     );
// }

// const Image=()=>{
//     return (
//       <img src="https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg"></img>
//     );
// }
// // const Greeting=()=>{
// //     return React.createElement("h1",{},"Average Jignesh")
// // }
// const Title=()=>{
//   return <h4>The Psychology of Money</h4>;
// }

// const Author=()=>{
//   return <h4>Morgan Housel</h4>;
// }

ReactDOM.render(<FullWidthGrid />, document.getElementById("root"));
