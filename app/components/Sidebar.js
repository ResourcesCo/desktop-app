import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Tree from './Tree';

const useStyles = makeStyles({
  tree: {
    overflowX: 'scroll',
    overflowY: 'scroll',
    width: '100%',
    height: '100%',
    backgroundColor: grey[100]
  }
});

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.tree}>
      <Tree />
    </div>
  );
};
