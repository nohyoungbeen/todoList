const data = [];

const inputTodo = document.querySelector("#inputTodo");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

console.log(inputTodo);
console.log(addBtn);
console.log(todoList);

printList();

addBtn.addEventListener("click", function () {
  //const id = data[0] ? data[data.length - 1 ].id + 1 : 1
  // if(data[0] != null){
  //     id = data[data.length - 1 ].id + 1
  // }
  data.push({
    id: data[0] ? data[data.length - 1].id + 1 : 1,
    state: 0,
    content: inputTodo.value,
  });
  inputTodo.value = "";
  printList();
});

todoList.addEventListener("click", (e) => {
  if (e.target.className == "removeBtn") {
    remove(e);
  }
  if (e.target.className == "completeBtn") {
    completeTodo(e);
  }
});

function printList() {
  todoList.innerHTML = data
    .map(
      (todo) => `
        <li class="List" data-id="${todo.id}">
            <span class="${todo.state == 1 ? "completedList" : ""}"> ${
        todo.content
      } </span>
            <button class="completeBtn">V</button>
            <button class="removeBtn">X</button>
        </li>`
    )
    .join("");

  //   const completeBtn = document.querySelectorAll(".completeBtn");
  //   completeBtn.forEach((v) => v.addEventListener("click", completeTodo));

  //   const removeBtn = document.querySelectorAll(".removeBtn");
  //   removeBtn.forEach((x) => x.addEventListener("click", remove));
}

function completeTodo(e) {
  const id = e.target.parentNode.dataset.id;
  const index = data.findIndex((v) => v.id == id);
  if (data[index].state == 0) {
    data[index].state = 1;
  } else {
    data[index].state = 0;
  }
  printList();
}

function remove(e) {
  const id = e.target.parentNode.dataset.id;
  const index = data.findIndex((x) => x.id == id);
  data.splice(index, 1);
  printList();
}
