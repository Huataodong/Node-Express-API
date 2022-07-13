import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //using json data in whole app

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    // console.log('[TEST]')
    res.send('hello from homepage')
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); // a call back function once we run the server


//we dont want to save and start server again when we change anything, so we use nodemon