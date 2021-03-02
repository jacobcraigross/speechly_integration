import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import useStyles from './styles'; // <-- React hook

const Details = () => {
    const classes = useStyles(); // <-- UI classes hook
    return (
        <Card className={classes.income}>
            <CardHeader title="Income" />
            <CardContent>
                <Typography variant="h5">
                    $500
                </Typography>
                {/* <Doughnut data="DATA" /> */}
            </CardContent>
        </Card>
    )
}

export default Details