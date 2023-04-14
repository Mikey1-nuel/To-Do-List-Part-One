const tasksEditUpdateCompleted = require('./script.js');
const { collection, addRemove } = require('../Testingunit/addremovelist.js');

describe('Update todo list description with respective index number', () => {
  addRemove.addTask('task-1');
  test('todo description should be updated with respective index number', () => {
    expect(tasksEditUpdateCompleted.editTaskDescription(0, 'edited')).toEqual(collection.description);
  });
});

describe('Update todo isCompleted with respective index number', () => {
  test('todo isCompleted is true as the index number in param should be changes', () => {
    expect(tasksEditUpdateCompleted.updateComplete(0)).toEqual(
      collection.isCompleted,
    );
  });
});
describe('delete todo list where isCompleted status is true', () => {
  test('todo list should only show todo list with isCompleted status is false', () => {
    expect(tasksEditUpdateCompleted.removeAllCompleted()).toEqual(
      collection.length,
    );
  });
});
