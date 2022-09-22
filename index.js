const express = require('express');
const router = require('./router/router');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const PORT = 4000;

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to mongodb');
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
