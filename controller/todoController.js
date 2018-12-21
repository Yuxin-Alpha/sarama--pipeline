const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://todo:todo123@ds141294.mlab.com:41294/todo')
//创建图表
let todoSchema = new mongoose.Schema({
  item: String
});
let Todo = mongoose.model('Todo', todoSchema);

let urlencodeParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
  app.get('/todo', (req, res) => {
    Todo.find({}, (err, data) => {
      if (err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodeParser, (req, res) => {
    Todo(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    })
  });

  app.delete('/todo/:item', (req, res) => {
    Todo.find({item: req.params.item}).remove((err, data) => {
      if (err) throw err;
      res.json(data);
    });
    // data = data.filter((todo) => {
    //   return req.params.item !== todo.item;
    // });
    // res.json(data);
  });
}