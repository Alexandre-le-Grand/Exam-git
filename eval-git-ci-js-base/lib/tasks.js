let tasks = [];
let nextId = 1;

function addTask(name) {
  if (!name || typeof name !== 'string') throw new Error('Invalid name');
  const task = { id: nextId++, name: name.trim(), done: false };
  tasks.push(task);
  return task;
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) throw new Error('Task not found');
  task.done = !task.done;
  return task;
}

function getTasks() {
  return tasks;
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { addTask, toggleTask, getTasks, reset };
