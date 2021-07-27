import React, { useContext } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { MathContext } from '../Contexts/MathContexts'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function AddComponent() {

  const {addVal, inputs, setAddVal, handler, classes, pageStrings } = useContext(MathContext)
  return (
    <Card className={classes.root}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <TextField id="filled-basic" label={pageStrings.input2} variant="filled" name="in1" onChange={(e) => handler(e)  } />
        </Grid>
        <Grid item lg={12}>
          <TextField id="filled-basic" label={pageStrings.input2}  variant="filled" name="in2" onChange={(e) => handler(e)  } />
        </Grid>
        <Grid item lg={12}>
          
          <Button onClick={() => {setAddVal(Number(inputs.in1)+ Number(inputs.in2))}}>
          {pageStrings.add}
          </Button>
          <Button onClick={() => {setAddVal('')}}>
          {pageStrings.reset}
          </Button>

          {addVal? <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {pageStrings.addition}
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
