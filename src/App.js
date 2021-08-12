import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import Saveicon from '@material-ui/icons/Save'
import Deleteicon from '@material-ui/icons/Delete'
import Buttongroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {green,blue} from '@material-ui/core/colors'
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
const useStyles=makeStyles({
  root:{
    background:'linear-gradient(90deg,blue,white)',
    border:0,
    borderRadius:5,
    color:'white',
    padding: '0 30px'
  }
})
function StyledButton(){
  const classes=useStyles()
  return (
  <Button className={classes.root}>
    styled button
  </Button>)
}
const theme = createMuiTheme({
  typography:{
    h1:{
      fontSize:22,
      marginBottom:'12px',
    },
    h2:{
      fontSize:14,
      marginBottom:'12px',
    }
  },
  palette:{
    primary:{
      main:green[500]
    },
    secondary:{
      main:blue[500]
    }
  }
})
function Checkboxexample(){
  const [checked, setChecked]=React.useState(true)
  return(
    <FormControlLabel
      control={<Checkbox
      checked ={checked}
      onChange={(e)=> setChecked(e.target.checked)}
      icon={<Saveicon />}
      checkedIcon={<Deleteicon />}
      inputProps={{
        'aria-label':'secondary checkbox'
      }}
      />}
      label ="Testing checkbox"
    />
  )
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm'>
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <Typography>
                  MuiTheme
                </Typography>
                <Button style={{backgroundColor:'white'}}>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h1">
              Welcome to MUI
            </Typography>
            <Typography variant="h2">
              Learn how to use Typography
            </Typography>
            <StyledButton />
            <TextField 
            variant="outlined"
            type="time"
            label=" The time"
            />
            <Grid container spacing={3} justify='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75,width:'100%'}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
              <Paper style={{height:75,width:'100%'}}/>
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75,width:'100%'}}/>
              </Grid>
            </Grid>
            <Checkboxexample />
            <Buttongroup
            variant="contained"
            size="large"
            color="primary"
            >
              <Button
              startIcon={<Saveicon />}
              //disabled
              >
                Save
              </Button>
              <Button
              startIcon={<Deleteicon />}
              //disabled
              >
                Discard
              </Button>
            </Buttongroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
