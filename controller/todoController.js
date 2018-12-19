let data = [
  {item: "白天吃饭"},
  {item: "晚上吃饭"},
  {item: "白天睡觉"},
  {item: "晚上睡觉"},
  {item: "白天敲代码"},
  {item: "晚上敲代码"},
  {item: "美滋滋"}
];
module.exports = function (app) {
  app.get('/todo', (req, res) => {
    res.render('todo', {todos: '123'});
  });

  app.post('/todo', (req, res) => {
    //coding
  });

  app.delete('/todo', (req, res) => {
    //coding
  });
}