import React, { useContext } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { MathContext } from '../Contexts/MathContexts'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Mulcomponent() {

  const { inputs, mulVal, setMulVal, handler, classes } = useContext(MathContext)

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item lg={12}>
          <TextField id="filled-basic" label="Input 1" variant="filled" name="in3" onChange={(e) => handler(e)} />
        </Grid>
        <Grid item lg={12}>
          <TextField id="filled-basic" label="Input 2" variant="filled" name="in4" onChange={(e) => handler(e)} />
        </Grid>
        <Grid item lg={12}>

          <Button onClick={() => { setMulVal(Number(inputs.in3) * Number(inputs.in4)) }}>
            Multiply
          </Button>
          <Button onClick={() => { setMulVal('') }}>
            Reset
          </Button>

          {mulVal ? <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Multiplication of Input 1 and Input 2
              </Typography>
              <Typography variant="h5" component="h2">
                {mulVal}
              </Typography>

            </CardContent>

          </Card> : ''}
        </Grid>
      </Grid>
    </Card>
  )
}

export default Mulcomponent
