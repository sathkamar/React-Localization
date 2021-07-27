import React, { useContext } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { MathContext } from '../Contexts/MathContexts'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Mulcomponent() {

  const { inputs, mulVal, setMulVal, handler, classes, pageStrings } = useContext(MathContext)

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item lg={12}>
          <TextField id="filled-basic" label={pageStrings.input1} variant="filled" name="in3" onChange={(e) => handler(e)} />
        </Grid>
        <Grid item lg={12}>
          <TextField id="filled-basic" label={pageStrings.input2} variant="filled" name="in4" onChange={(e) => handler(e)} />
        </Grid>
        <Grid item lg={12}>

          <Button onClick={() => { setMulVal(Number(inputs.in3) * Number(inputs.in4)) }}>
            {pageStrings.multiply}
          </Button>
          <Button onClick={() => { setMulVal('') }}>
          {pageStrings.reset}
          </Button>

          {mulVal ? <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {pageStrings.multiplication}
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
