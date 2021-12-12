# subredditredditui

the ui app demo can be found in :- 

    https://subreddit-search-app-ui.herokuapp.com/



Local development setup

    git pull <repo>
    # install dependencies
    npm install

    # to run local dev server on 3000
    npm start
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    # to run eslint on a directory or file
    npx eslint yourfile.js|directory name


File strcuture 

    there are 4 components that renders the page
    App             AsyncSearchbox  SubredditPost   SubredditPosts

    the App component manages 
    - AsyncSearchbox 
    - SubredditPosts
        - SubredditPost



By Soumosir Dutta












### `npm test`

Yet to be implemented

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.