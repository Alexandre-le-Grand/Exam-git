const { addTask, toggleTask, getTasks, reset } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('addTask ajoute une tâche correctement', () => {
  const task = addTask('Test task');
  expect(task.name).toBe('Test task');
  expect(task.done).toBe(false);
  expect(getTasks()).toContain(task);
});

test('toggleTask toggles done', () => {
  const task = addTask('Toggle test');
  toggleTask(task.id);
  expect(task.done).toBe(true);
  toggleTask(task.id);
  expect(task.done).toBe(false);
});

test('toggleTask throws if id invalid', () => {
  expect(() => toggleTask(999)).toThrow('Task not found');
});
