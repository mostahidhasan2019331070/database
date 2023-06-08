const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.send('Welcome to the home page!');
});
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
  });
  app.get('/catagory', (req, res) => {
    res.send('Welcome to the catagory  page!');
  });
  
app.get('/category/:id', (req, res) => {
    const categoryId = req.params.id;
    res.send(`Displaying category ${categoryId}`);
  });
  app.get('/user', (req, res) => {
    res.send('Welcome to the user  page!');
  });
  app.get('/product/id/:edit', (req, res) => {
    res.send('Welcome to the edit page!');
  });
  app.get('/product/:id', (req, res) => {
    res.send('Welcome to the user  page!');
  });
  app.get('/product', (req, res) => {
    res.send('Welcome to the user  page!');
  });
  app.get('/post', (req, res) => {
    res.send('Welcome to the user  page!');
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});