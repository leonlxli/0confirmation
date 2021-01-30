import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import { useWeb3React } from '@web3-react/core'
import { injectedConnector } from '../connectors/injectedConnectors'
import { shortenAddress } from '../utils/utils'
import Jazzicon from 'jazzicon';


const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  connectionContainer: {

  }
}));

    

export function NavBar() {
	const classes = useStyles();
	const { 
	    // chainId, 
	    account, 
	    activate, 
	    // active 
	} = useWeb3React()

	const connect = (evt) => {
	    evt.preventDefault();
	    activate(injectedConnector)
	}

	// Render the identicon and prepend it to the account div
	useEffect(() => {
	  if (account) {
	    let jazzicon = Jazzicon(16, parseInt(account.slice(2, 10), 16))
	    jazzicon.className = 'jazzicon'
	    let currentAccountDiv = document.getElementById('connectedAddress')
	    currentAccountDiv.prepend(jazzicon)
	  }
	}, [account])

	// Check if there's an account already connected
	useEffect(() => {
	    injectedConnector.isAuthorized().then(isAuthorized => {
	        if (isAuthorized) {
	            activate(injectedConnector)
	        }
	    })
	})

	return(
		<AppBar position="fixed" className={classes.appBar} color = "#424242">
          <Toolbar>
          	<Grid
      	      justify="space-between"
      	      container 
      	      spacing={24}
      	    >
            <Grid item>
              <Typography variant="h5" noWrap>
                Grab-n-Go Sushi
              </Typography>
              <Typography variant="h6" noWrap>
                powered by 0cf
              </Typography>
            </Grid>
            <Grid item style={{
			    display: 'flex',
			    alignItems: 'center',
			    justifyContent: 'center',
			}}>
	          	{ 
	            account !== undefined ? 
	                <Link to="/#" className="nav-0cf-connected" id="connectedAddress">{shortenAddress(account)}</Link> 
	                : <Link to="/#" className="nav-0cf-connect" id="btn-connect" onClick={connect}>Connect Wallet</Link>
	            }
            </Grid>
           </Grid>
          </Toolbar>
        </AppBar>
	)
}