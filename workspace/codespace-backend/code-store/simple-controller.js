const express = require('express');
const app = express();
const rateLimiter = require('express-rate-limit');

const rateLimit = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 3,
})

const port = '3030';

const users = Array.from({length: 100}).map((_, index) => {
return {
    user: `user_${index+1}`,
    id: index+1
}
})

app.use('/user', rateLimit);

app.get('/user', (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const userList = users.slice(skip, skip+limit);

    res.status(200).send({
        users: userList,
        message: "Here is the list of the users"
    })
})

app.listen(port, ()=> {
    console.log(`server is running on the port ${port}`);
})