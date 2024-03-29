// Retrieved from https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147 to help with Heroku deployment

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/storyshare-frontend'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/storyshare-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
