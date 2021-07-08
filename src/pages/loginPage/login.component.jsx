import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { useStyles } from "./login.styles"

const Login = ({ onSubmit }) => {
   const classes = useStyles();
    return (
    <Container className={classes.pageContainer} >
      <Container maxWidth="xs">
        <form onSubmit = {(e) =>{
          onSubmit(e)
        }}>
          <Grid container className={classes.container} spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth 
                  label="Email" 
                  name="email" 
                  size="small"
                  variant="outlined" 
                  id="standard-error"
                  required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button color="secondary" fullWidth type="submit" variant="contained">
                Log in
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Container>
    )
}

export default Login
