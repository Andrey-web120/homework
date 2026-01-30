"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

const todoForm = document.querySelector(".form");
const todoInput = document.querySelector(".input");
const todosContainer = document.querySelector(".todos");

const createTodoElement = todoData => {
  const listItem = document.createElement("li");
  listItem.classList.add("todo");
  listItem.dataset.id = todoData[todoKeys.id]; 

  const textDiv = document.createElement("div");
  textDiv.classList.add("todo-text");
  textDiv.textContent = todoData[todoKeys.text];
  if (todoData[todoKeys.is_completed]) {
    listItem.classList.add("active");
  }
  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("todo-actions");

  const completeButton = document.createElement("button");
  completeButton.classList.add("button-complete", "button");
  completeButton.innerHTML = "&#10004;"; 
  completeButton.onclick = () => handleToggleComplete(todoData[todoKeys.id]);
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("button-delete", "button");
  deleteButton.innerHTML = "&#10006;"; 
  deleteButton.onclick = () => handleDeleteTodo(todoData[todoKeys.id]);
  actionsDiv.appendChild(completeButton);
  actionsDiv.appendChild(deleteButton);

  listItem.appendChild(textDiv);
  listItem.appendChild(actionsDiv);

  return listItem;
};
const renderTodos = () => {
  if (!todosContainer) return;
  todosContainer.innerHTML = "";
  todos.forEach(todoData => {
    const element = createTodoElement(todoData);
    todosContainer.appendChild(element);
  });
};
const handleCreateTodo = (todos, text) => {
  const newTodoData = createTodo(todos, text);
  if (todosContainer) {
    const newElement = createTodoElement(newTodoData);
    todosContainer.appendChild(newElement);
  }
};
const handleToggleComplete = todoId => {
  const updated = completeTodoById(todos, todoId);
  if (updated) {
    renderTodos();
  }
};

const handleDeleteTodo = todoId => {
  deleteTodoById(todos, todoId);
  renderTodos(); 
};
if (todoForm) {
  todoForm.addEventListener("submit", event => {
    event.preventDefault();

    const text = todoInput.value.trim();

    if (text) {
      handleCreateTodo(todos, text);
      todoInput.value = "";
      todoInput.focus();
    }
  });
}
