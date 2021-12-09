import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CircularProgress from '@mui/material/CircularProgress';
import './SubredditPosts.css';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import SubredditPost from '../SubredditPost/SubredditPost.js'
import url from '../../apis/backendApi.js'

const SubredditPosts = ({subreddit}) => {

    
    const [postObject,setPostObject] = React.useState({
        posts : [],
        loading: true,
    });
    
    React.useEffect(() => {    
        (async () => { 
          
            const postObject = { posts : [] , loading: true};
            setPostObject({...postObject});  
    
            const r = await fetch(`${url}api/blogs/${subreddit}`);
           
            if(r.status!=200){
                const post  = await r.json();
                postObject.posts = [{title:post.msg,ups:0,downs:0,score:0,awards:0,id:0,author_url:'https://www.reddit.com/user/good_invester',author:'SubRedditApp',created:new Date().getTime()}];
            }
            else{
                const posts  = await r.json();
                postObject.posts = [...posts];
            }
            postObject.loading = false;
            setPostObject({...postObject})
          
          
        })();
      }, [subreddit]);  
  
  return (
    <div className="SubredditPosts">
        { postObject.loading ? 

            <CircularProgress className="spacebetween"/>
            :
            postObject.posts.map( (d) => <div className="spacebetween slider" key={d.id}> <SubredditPost post={d}/> </div>)
        }
    </div>
    
  );
}

SubredditPosts.propTypes = {
    subreddit: PropTypes.string.isRequired,
};

export default SubredditPosts;

