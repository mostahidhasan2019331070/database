const express = require('express');
const app = express();
app.set('view engine','ejs')
app.get('/home', (req, res) => {
  res.send('Welcome to the home page!');
});
app.get('/', (req, res) => {
    res.render('index');
  });
 

app.get('/search', (req, res) => {
  const query = req.query.query ; // Access the value of the 'query' parameter
  
  // Do something with the 'query' value (e.g., perform a search)

  // Return a response or render a template
  res.send(`You searched for: ${query}`);
});



  app.get('/catagory', (req, res) => {
    res.send('Welcome to the catagory  page!');
  });
  app.get('/search ', (req, res) => {
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
  app.get('/registration', (req, res) => {
    res.send('Welcome to the registration   page!');
  });
  app.get('/login', (req, res) => {
    res.send('Welcome to the login   page!');
  });
  app.get('/chat', (req, res) => {
    res.send('Welcome to the chat  page!');
  });
  app.get('/chat/:id', (req, res) => {
    res.send('Welcome to the chat/:id  page!');
  });
  app.get('/product',(res,req)=>
  {
    res.send('Welcome to the product  page!');
  })
  app.get('/query',(res,req)=>
  {
    res.send("well come to query page !");
  })
  

app.listen(3000, () => {
  console.log('Server started on port 3000');
});