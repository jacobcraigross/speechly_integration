import React from 'react';
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
    const classes = useStyles();
    return (
        <Grid>
            <Grid>
                <Typography>
                    ....
                </Typography>
            </Grid>
            <Grid>
                <FormControl>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default Form
