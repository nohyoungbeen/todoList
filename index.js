const data = [
  {
    id: 1,
    state: 0,
    content: "todo1",
  },
  {
    id: 2,
    state: 0,
    content: "todo2",
  },
];

const todoList = document.querySelector("#todoList");
const addButton = document.querySelector("#addButton");
const putTodoList = document.querySelector("#putTodoList");

printList();

//추가
addButton.addEventListener("click", function () {
  data.push({
    id: data[data.length - 1].id + 1,
    state: 0,
    content: putTodoList.value,
  });
  putTodoList.value = "";
  console.log(data.id);
  printList();
});

//불러오기
function printList() {
  todoList.innerHTML = data
    .map(
      (todo) => `
        <li class="li" data-id="${todo.id}">
            <span class="todoList ${todo.state == 1 ? "completedList" : ""}">${
        todo.content
      }</span>
            <button class="deleteBtn">X</button>
            <button class="complete">V</button>
        </li>`
    )
    .join("");

  const deleteBtn = document.querySelectorAll(".deleteBtn");
  deleteBtn.forEach((x) => x.addEventListener("click", remove));

  const complete = document.querySelectorAll(".complete");

  complete.forEach((x) => x.addEventListener("click", completeTodo));
}

function remove(e) {
  console.log(e.target.parentNode.dataset.id);
  const id = e.target.parentNode.dataset.id;
  const index = data.findIndex((x) => x.id == e.target.parentNode.dataset.id);
  if (data[index].id == id) {
    data.splice(index, 1); 
    printList();
  }
}

function completeTodo(e) {
  const index = data.findIndex((x) => x.id == e.target.parentNode.dataset.id);

  if (data[index].state == 1) {
    data[index].state = 0;
  } else {
    data[index].state = 1;
  }
  printList();
}