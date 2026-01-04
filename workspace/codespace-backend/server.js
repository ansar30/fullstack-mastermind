const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const middlewareA = (req, res, next) => {
  console.log("This is 1st middleware and its name is A");
  next();
};

const middlewareb = (req, res, next) => {
  try {
    req.requestTime = Date.now();
    console.log("Request Time", req.requestTime);
    next();
  } catch (err) {
    console.error(err, "Error occured");
  }
};

const users = Array.from({ length: 100 }).map((_, index) => {
  return {
    id: index,
    username: `user_${index}`,
  };
});

const port = 3030;

app.use(middlewareA);
app.use(middlewareb);

const rateLimitter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 2,
  })

app.use(rateLimitter);

app.get("/user", (req, res) => {
  const limit = parseInt(req.query.limit) || 5;
  const page = parseInt(req.query.page) || 1;
  const skip = (page - 1) * limit;
  const usersList = users.slice(skip, skip + limit);

  if (usersList || !users) {
    throw new Error("Here comes the error");
  }
  res.status(200).send({
    users: usersList,
    message: "List of the users",
    requestTime: req.requestTime,
    success: true,
  });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    statusCode: err.statusCode || 500,
    success: false,
  });
});

app.listen(port, () => {
  console.log(`App is listening on the port ${port} !`);
});
