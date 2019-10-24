// Dependencies
const express = require('express');
const http = require('http');
const path = require('path');

// Instantation
const app = express();
const port = 3005;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

// Routes

//Listen
app.listen(3005, () => console.log('Server running on port 3005'))
