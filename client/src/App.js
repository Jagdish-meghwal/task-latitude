import React, { useEffect } from 'react'
import {AppBar, Container, Grid, Grow, Typography} from '@material-ui/core'
import Posts from './components/Posts/Posts'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './action/posts'

const App = () => {
    const classes=useStyles()
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit" >
                <Typography className={classes.heading} varient="h2" align="center">
                     Post Collection 
                </Typography>
            </AppBar>
            <Posts />                                        
        </Container>
    )
}

export default App
