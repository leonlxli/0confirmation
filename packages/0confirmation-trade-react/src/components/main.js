import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { NavBar } from './navBar'
import { SideBar } from './sideBar'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Main() {
  let theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar/>
        <SideBar/> 
        <main className={classes.content}>
          
        </main>
      </div>
    </ThemeProvider>
  );
}