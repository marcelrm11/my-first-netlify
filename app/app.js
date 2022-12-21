console.log("welcome");

const list = document.querySelector(".task-list");
const button = document.querySelector(".add-button");

button.addEventListener("click", addTask);

function addTask() {
  const input = document.querySelector("#new-task");
  const el = document.createElement("li");
  el.innerHTML = input.value;
  list.appendChild(el);
  input.value = "";
}
