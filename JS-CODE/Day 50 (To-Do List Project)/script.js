const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// save task
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Dom render

const renderTasks = () => {
  todoList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "Completed" : "";
    li.innerHTML = `
    <span>${task.text}</span>
    <div>
        <button onclick = "toggleTask(${index})">${
      task.completed ? "Undo" : "Completed"
    }</button>
        <button onclick="deleteTask(${index})">Delete</button>
    </div>
    `;
    todoList.appendChild(li);
  });
};

addBtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();
    todoInput.value = "";
  }
});

const toggleTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
};

renderTasks();
