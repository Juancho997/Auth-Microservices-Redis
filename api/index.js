import express from 'express';

import api from '../config.js';
import auth from './components/auth/network.js';
import user from './components/user/network.js';

const app = express();

app.use(express.json());

// ROUTES
app.use('/api/user', user);
app.use('/api/auth', auth);

app.listen(api.port, ()=>{
    console.log(`Api listening on port ${api.port}`)
})