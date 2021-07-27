import React, { useContext } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { MathContext } from '../Contexts/MathContexts'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function AddComponent() {

  const {addVal, inputs, setAddVal, handler, classes} = useContext(MathContext)
  return (
    <Card className={classes.root}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <TextField id="filled-basic" label="Input 1" variant="filled" name="in1" onChange={(e) => handler(e)  } />
        </Grid>
        <Grid item lg={12}>
          <TextField id="filled-basic" label="Input 2" variant="filled" name="in2" onChange={(e) => handler(e)  } />
        </Grid>
        <Grid item lg={12}>
          
          <Button onClick={() => {setAddVal(Number(inputs.in1)+ Number(inputs.in2))}}>
            Add
          </Button>
          <Button onClick={() => {setAddVal('')}}>
            Reset
          </Button>

          {addVal? <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Addition of Input 1 and Input 2
              </Typography>
              <Typography variant="h5" component="h2">
                {addVal}
              </Typography>

            </CardContent>

          </Card>:''}
        </Grid>
      </Grid>
    </Card>
  )
}

export default AddComponent
