import React from 'react';
import { Card,CardContent, CardMedia, Typography } from '@material-ui/core/';

import useStyles from './styles';

const Post = ({ post }) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.body}</Typography>
      </CardContent>
    </Card>);
};

export default Post;
