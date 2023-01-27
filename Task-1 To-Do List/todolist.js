const form = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form from submitting

  // get the value of the todo item
  const todo = document.querySelector("#todo-input").value;

  // create a new list item with the todo item
  const li = document.createElement("li");
  li.innerHTML = `
    ${todo}
    <button class="delete-btn">Delete</button>`;

  // add the new list item to the todo list
  todoList.appendChild(li);

  // reset the form
  form.reset();
});

todoList.addEventListener("click", (e) => {
  if (e.target.className === "delete-btn") {
    // delete the todo item
    const li = e.target.parentElement;
    todoList.removeChild(li);
  }
});
