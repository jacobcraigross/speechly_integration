import React from 'react';
import Details from './components/details/Details';
import {Grid} from '@material-ui/core';

const App = () => {
    return (
        <div>
            <Grid container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details />
                </Grid>
                <Grid item xs={12} sm={4}>
                    MAIN
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details />
                </Grid>
            </Grid>
        </div>
    )
}

export default App
