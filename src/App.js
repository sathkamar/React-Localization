import { useState, useEffect } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import { MathContext } from './Contexts/MathContexts'
import { allLangString } from './stringConst';
import AddComponent from './Components/AddComponent'
import Mulcomponent from './Components/MulComponent';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import {InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';


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
  const [selectedLang, setLang] = useState('tm')
  const [pageStrings, setPageStrings] = useState({})
  
  
  useEffect(() => {
    setPageStrings(allLangString[selectedLang])
    return () => {  }
  }, [selectedLang])
  

  const handler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  const handleChange = (e) => {
    setLang(e.target.value)
  }

  return (
    <MathContext.Provider value={{ inputs, setInputs, setAddVal, setMulVal, handler, addVal, mulVal, classes, pageStrings }}>
      <Grid container spacing={2}>
        <Grid item lg={8} sm={8}>

          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {pageStrings.pageTitle}
              </Typography>
              <Typography variant="h5" component="h2">
                {addVal && mulVal ? mulVal - addVal : pageStrings.result }
              </Typography>

            </CardContent>

          </Card>
          <Typography variant="body2" >

          </Typography>
        </Grid>
        <Grid item lg={4} sm={4}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Lang</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedLang}
          onChange={handleChange}
          label="Language"
        >
          <MenuItem value="en">
            <em>English</em>
          </MenuItem>
          <MenuItem value="tm">Tamil</MenuItem>
        </Select>
      </FormControl>
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
