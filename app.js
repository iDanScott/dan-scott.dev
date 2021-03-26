const express = require('express');
const app = express();
const port = 80;

app.use(express.static('static'));

app.use('/static', express.static('static'));

app.set('views', './views');
app.set('view engine', 'pug');

app.use((req, res, next) => {
  console.log(`URL: ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});