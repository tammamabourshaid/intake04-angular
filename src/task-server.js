const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const _ = require('lodash');

const tasks = JSON.parse(fs.readFileSync('./tasks.json', { encoding: 'UTF-8' }));
const saveTasks = tasks =>
  new Promise(resolve =>
    fs.writeFile(
      './tasks.json',
      JSON.stringify(tasks),
      {
        encoding: 'UTF-8'
      },
      resolve
    )
  );

app
  .use(cors())
  .use(express.json())
  .get('/tasks', (req, res) => res.send(tasks))
  .post('/tasks', (req, res) => {
    console.log(req);
    const task = req.body;
    task.id = tasks.length + 1;
    tasks.push(task);
    saveTasks(tasks).then(() => res.send(tasks));
  })
  .delete('/tasks', (req, res) => {
    const task = JSON.parse(req.query.data);
    const index = _.findIndex(tasks, el => el.id === task.id);
    tasks.splice(index, 1);
    saveTasks(tasks).then(() => res.send(tasks));
  })
  .listen(3000, () => console.log('server started on port 3000'));
