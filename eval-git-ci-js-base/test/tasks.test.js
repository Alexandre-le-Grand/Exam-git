const { addTask, tasks } = require('../lib/tasks');

test('addTask adds a task', () => {
    const task = addTask('Test task');
    expect(task.name).toBe('Test task');
    expect(task.done).toBe(false);
    expect(tasks).toContain(task);
});

test('addTask trims the name', () => {
    const task = addTask('  Test  ');
    expect(task.name).toBe('Test');
});

test('addTask throws on invalid name', () => {
    expect(() => addTask()).toThrow();
});
