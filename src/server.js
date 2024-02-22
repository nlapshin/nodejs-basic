const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Позволяет Express обрабатывать JSON-тела запросов

let tasks = []; // Простая "база данных" для хранения задач

// Create - Создание новой задачи
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.status(201).send(newTask);
});

// Read All - Получение списка всех задач
app.get('/tasks', (req, res) => {
  res.status(200).send(tasks);
});

// Read Single - Получение одной задачи по ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).send({ message: 'Task not found' });
  }
  res.status(200).send(task);
});

// Update - Обновление задачи по ID
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).send({ message: 'Task not found' });
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;

  res.status(200).send(task);
});

// Delete - Удаление задачи по ID
app.delete('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) {
    return res.status(404).send({ message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send(); // No Content
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
