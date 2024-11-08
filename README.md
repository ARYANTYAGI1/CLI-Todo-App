echo "# CLI Todo Application

A simple command-line interface (CLI) Todo application that allows users to manage their tasks. Tasks can be added, listed, and removed, and are stored in a JSON file (\`todo.json\`).

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Adding a Task](#adding-a-task)
  - [Listing All Tasks](#listing-all-tasks)
  - [Removing a Task](#removing-a-task)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Add Tasks**: Add tasks to the list with a single command.
- **List Tasks**: View all tasks in the list.
- **Remove Tasks**: Remove tasks by specifying the task number.

## Prerequisites
- **Node.js**: Ensure that Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Installation
1. **Clone the Repository**:
   \`\`\`bash
   git clone https://github.com/ARYANTYAGI1/CLI-Todo-App.git
   cd cli-todo-app
   \`\`\`

2. **Create a \`todo.json\` file**:
   - In the root of the project directory, create an empty \`todo.json\` file to store your tasks.
   \`\`\`bash
   touch todo.json
   \`\`\`

## Usage
To run this application, use the following commands in your terminal:

### Adding a Task
Add a new task to the list with the \`add\` command:
\`\`\`bash
node app.js add \"Your Task Description\"
\`\`\`

**Example**:
\`\`\`bash
node app.js add \"Buy groceries\"
\`\`\`

### Listing All Tasks
List all current tasks with the \`list\` command:
\`\`\`bash
node app.js list
\`\`\`

This will display all tasks stored in \`todo.json\` with their numbers.

### Removing a Task
Remove a specific task by its number (as shown by \`list\`) with the \`remove\` command:
\`\`\`bash
node app.js remove <task-number>
\`\`\`

**Example**:
\`\`\`bash
node app.js remove 1
\`\`\`

This removes the first task from the list.

## Error Handling
- If \`todo.json\` is empty or missing, the app will automatically handle this by creating an empty list.
- Invalid commands or task numbers will prompt error messages to guide users.

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## License
This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy managing your tasks from the command line!" > README.md
