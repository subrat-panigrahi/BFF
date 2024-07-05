const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index.js');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use('/', indexRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});