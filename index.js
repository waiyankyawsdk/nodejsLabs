const express = require('express');
const users = require('./routes/users.js');

const app = express();
const PORT =5000;

app.use(express.json());

app.use("/user", users);

app.listen(PORT,()=>console.log("Server is running at port "+PORT));
