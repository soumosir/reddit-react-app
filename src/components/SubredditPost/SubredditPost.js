import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CircularProgress from '@mui/material/CircularProgress';
import './SubredditPost.css';
import PropTypes from 'prop-types';
// import { CircularProgress } from '@material-ui/core';
import {  Paper,  Link } from '@mui/material/';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';



const SubredditPost = ({post}) => {

  console.log("post -> ",post)
  let date = new Date(post.created*1000);

  date = date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds();
  return (
    <Paper className="paper">
        <div className="votes">
          <div className="icontext"><ArrowDropUpIcon/><span> {post.ups}</span></div>
          <div className="icontext"><ArrowDropDownIcon/><span> {post.downs}</span></div>
          <div className="icontext"><DataThresholdingIcon/><span> {post.score}</span></div>
          <div className="icontext"><EmojiEventsIcon/> <span> {post.awards}</span></div>
        </div>
        <div className="post">
          <div>
            <h4>{post.title}</h4> 
          </div>  
          <div>
            <p>Created by <Link href={post.author_url} underline="hover">
                            {post.author}
                          </Link> at {date}</p>
          </div>
          <div>
            <span className="subreddittext">{post.subreddit}</span>
          </div>
          
        </div>
        <div className="linkdiv">
            <Link href={post.url} underline="hover">
              <span className="linktext">{post.url}</span>
            </Link>
        </div>
    </Paper>
    
    
  );
}

SubredditPost.propTypes = {
    post: PropTypes.object.isRequired,
};

export default SubredditPost;

