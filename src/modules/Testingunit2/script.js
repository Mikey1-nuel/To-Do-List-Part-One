let { collection } = require('../Testingunit/addremovelist.js');

const tasksEditUpdateCompleted = {
  availableTasks: () => collection,
  editTaskDescription: (index, taskStatement) => {
    collection = collection.map((task, i) => {
      task.index = task.index || 1;
      task.description = (i === index - 1) ? taskStatement : task.description;
      task.completed = task.completed || false;
      return collection;
    });
  },
  updateComplete: (index) => {
    collection = collection.map((task, j) => {
      task.index = task.index || 1;
      task.completed = (j === index - 1) ? !task.completed : task.completed;
      task.description = task.description || '';
      return collection;
    });
  },
  removeAllCompleted: () => {
    collection = collection.filter((task) => !task.completed);
    return collection.length;
  },
};

module.exports = tasksEditUpdateCompleted;