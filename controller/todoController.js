module.exports = function (app) {
  app.get('/todo', (req, res) => {
    res.render('todo');
  });

  app.post('/todo', (req, res) => {
    //coding
  });

  app.delete('/todo', (req, res) => {
    //coding
  });
}