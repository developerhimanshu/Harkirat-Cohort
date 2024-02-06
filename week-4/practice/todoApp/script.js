let id = 0;

function markAsDone(id) {
  const parent = document.getElementById(id);
  parent.children[2].innerHTML = "Done";
}
function createChild(title, description, id) {
  const child = document.createElement("div");
  const firstGrandChild = document.createElement("div");
  firstGrandChild.innerHTML = title;
  const secondGrandChild = document.createElement("div");
  secondGrandChild.innerHTML = description;
  const thirdGrandChild = document.createElement("button");
  thirdGrandChild.innerHTML = "Mark as done";
  thirdGrandChild.setAttribute("onclick", `markAsDone(${id})`);
  child.appendChild(firstGrandChild);
  child.appendChild(secondGrandChild);
  child.appendChild(thirdGrandChild);
  child.setAttribute("id", id);
  return child;
}
function addTodo() {
  const title = document.getElementById("todo-title").value;
  const description = document.getElementById("todo-description").value;
  const container = document.getElementById("container");
  id++;
  container.appendChild(createChild(title, description, id));
}
