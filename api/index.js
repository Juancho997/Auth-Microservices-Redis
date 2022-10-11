import express from 'express';

import {api} from '../config.js';
import auth from './components/auth/network.js';
import user from './components/user/network.js';
import post from './components/post/network.js';
import errors from '../network/errors.js';
const app = express();

app.use(express.json());

// ROUTES
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/post', post);

// custom error handler middleware
app.use(errors);

app.listen(api.port, ()=>{
    console.log(`Api listening on port ${api.port}`)
})