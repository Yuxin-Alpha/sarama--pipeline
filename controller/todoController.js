const bodyParser = require('body-parser');
let urlencodeParser = bodyParser.urlencoded({extended: false});
let data = [
  
];
module.exports = function (app) {
  app.get('/todo', (req, res) => {
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodeParser, (req, res) => {
    data.push(req.body);
  });

  app.delete('/todo', (req, res) => {
    //coding
  });
}