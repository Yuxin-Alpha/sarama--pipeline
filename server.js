const express = require("express");
const todoController = require("./controller/todoController")

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

todoController(app);


app.listen(port, () => {
  console.log(`Server is running on port ${ port }`);
})