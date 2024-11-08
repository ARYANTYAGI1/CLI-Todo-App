const fs = require("fs");
const filePath = "./todo.json";

// Load tasks from JSON file
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return dataJSON ? JSON.parse(dataJSON) : []; // Return empty array if JSON is empty
  } catch (error) {
    return []; // Return empty array if file does not exist or JSON is invalid
  }
};

// Save tasks to JSON file
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks, null, 2); // Format JSON for readability
  fs.writeFileSync(filePath, dataJSON);
};

// Add a new task
const addTask = (task) => {
  if (!task) {
    console.log("Please provide a task to add.");
    return;
  }
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
  console.log("Task added:", task);
};

// Show all tasks
const showTasks = () => {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("Your tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
};

// Remove a task by its index
const removeTask = (index) => {
  const tasks = loadTasks();
  const taskIndex = parseInt(index) - 1;

  if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
    console.log("Invalid task number.");
    return;
  }

  const removedTask = tasks.splice(taskIndex, 1);
  saveTasks(tasks);
  console.log("Removed task:", removedTask[0]);
};

// Main command handler (Moved to the end to avoid "ReferenceError")
const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  showTasks();
} else if (command === "remove") {
  removeTask(argument);
} else {
  console.log("Invalid command! Use 'add', 'list', or 'remove'.");
}
