import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useIsFetching } from 'react-query';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#E2B616',
    },
  },
});

function LoadingIndicator() {
  const classes = useStyles();
  const fetchingQueries = useIsFetching();

  return fetchingQueries ? <LinearProgress className={classes.root} /> : null;
}

export default LoadingIndicator;
