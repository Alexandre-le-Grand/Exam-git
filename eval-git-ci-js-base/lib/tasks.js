let tasks = [];

function addTask(name) {
    if (!name || typeof name !== 'string') throw new Error('Invalid name');
    const task = { id: Date.now(), name: name.trim(), done: false };
    tasks.push(task);
    return task;
}

module.exports = { addTask, tasks }; 