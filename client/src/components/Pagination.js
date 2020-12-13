import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Paginations = props => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Pagination 
                count={props.count} 
                page={props.page} 
                siblingCount={2} 
                boundryCount={2}
                size="large"
                onChange={(event, value) => props.handleChange(value)}
                />
        </div>
    );
}

export default Paginations;