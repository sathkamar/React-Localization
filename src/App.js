import { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import { MathContext } from './Contexts/MathContexts'
import AddComponent from './Components/AddComponent'
import Mulcomponent from './Components/MulComponent';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function App() {
  const classes = useStyles();
  const [inputs, setInputs] = useState({ in1: "", in2: "", in3: "", in4: "" })
  const [addVal, setAddVal] = useState("")
  const [mulVal, setMulVal] = useState("")

  const handler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <MathContext.Provider value={{ inputs, setInputs, setAddVal, setMulVal, handler, addVal, mulVal, classes }}>
      <Grid container spacing={2}>
        <Grid item lg={12} sm={12}>

          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Subtraction of multiplied value and Addition value
              </Typography>
              <Typography variant="h5" component="h2">
                {addVal && mulVal ? mulVal - addVal : "Invalid result"}
              </Typography>

            </CardContent>

          </Card>
          <Typography variant="body2" >

          </Typography>
        </Grid>
        <Grid item lg={6} sm={6}>
          <AddComponent />
        </Grid>
        <Grid item lg={6} sm={6}>
          <Mulcomponent />
        </Grid>
      </Grid>
    </MathContext.Provider>

  );
}

export default App;
