import React, {useState} from 'react';
import logo from './../../logo.svg';
import './App.css';
import Container from '@mui/material//Container';
import Typography from '@mui/material//Typography';
import AsyncSearchbox from '../AsyncSearchbox/AsyncSearchbox.js'
import SubredditPosts from '../SubredditPosts/SubredditPosts.js'
// import Box from '@material-ui/core/Box';
import {  Paper } from '@mui/material/';
function App() {


  const [subreddit, setSubreddit] = useState("");
  const handleInput = i => {
    console.log(" input - ",i);
    if(i!="")
      
      setSubreddit(i);
  }



  return (
    <Container maxWidth="lm" className="App">
      <Paper className="Paper">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          SubReddit Search App
        </Typography>
        <AsyncSearchbox handleInput={handleInput}/>
      </Paper>
      {subreddit!=""?
      // <Paper className="Paper">
        <SubredditPosts subreddit={subreddit}/>
      // </Paper>
      :""}
    </Container>
  );
}
export default App;