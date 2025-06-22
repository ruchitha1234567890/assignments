import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    backgroundColor: '#a83285',
    color: 'white',
    bottom: '0',
    position: 'fixed',
    minWidth: '100%',
  },
  text: {
    textAlign: 'center',
    marginLeft: '50px',
    marginRight: '50px',
  },
  at: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 500,
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.main}
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={1}
        component="footer"
        mt={8}
      >
        <Typography className={classes.text}>
          Apna Movie Database V2 |{' Copyright © '}
          <a className={classes.at} href="http://rajarshisamaddar.com/">
            Rajarshi Samaddar
          </a>
          {'  '}
          2020 - {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </>
  );
}
