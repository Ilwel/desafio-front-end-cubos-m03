import React from 'react';
import useStyles from '../TextField/styles';
import TextField from '@material-ui/core/TextField';



export default function MyTextField({ label }) {

    const classes = useStyles();

    return (
        <TextField id="standard-basic" label={label} className={classes.root}/>
    );
}