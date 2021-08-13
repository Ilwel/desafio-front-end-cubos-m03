import React from 'react';
import useStyles from '../TextField/styles';
import TextField from '@material-ui/core/TextField';



export default function MyTextField({ label, id, register, error, type }) {

    const classes = useStyles();

    return (
        <TextField
            id={id}
            label={label}
            className={classes.root}
            {...register()}
            error={error}
            type={type}
        />
    );
}