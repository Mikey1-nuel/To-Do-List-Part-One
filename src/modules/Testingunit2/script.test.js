const tasksEditUpdateCompleted = require('./script.js');
const { collection, addRemove } = require('../Testingunit/addremovelist.js');

describe('Update todo list description with respective index number', () => {
  addRemove.addTask('task-1');
  test('todo description should be updated with respective index number', () => {
    expect(tasksEditUpdateCompleted.editTaskDescription(0, 'edited')).toEqual(collection.description);
  });
});
