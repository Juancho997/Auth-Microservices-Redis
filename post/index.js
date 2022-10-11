import express from 'express';

import { post_service } from '../config.js';
import post from './components/post/network.js';
import errors from '../network/errors.js';

const app = express();

app.use(express.json());

// ROUTES
app.use('/api/post', post);

// custom error handler middleware
app.use(errors);

app.listen(post_service.port, () => {
    console.log(`Post Service listening on port ${post_service.port}`)
})