import express from 'express'
import serverRenderer from './middleware/renderer'
import configureStore from '../src/configureStore'

// const configureStore = require('../src/configureStore')

const PORT = 4000;
const path = require('path');

// initialize the application and create the routes
const app = express();
const store = configureStore();
const router = express.Router();

// root (/) should always serve our server rendered page
// router.use('^/$', serverRenderer);

// anything else should act as our index page
// react-router will take care of everything
router.use('*', serverRenderer(store));
app.use(router);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// tell the app to use the above rules
app.use(router);

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});
