const addButton = document.getElementById("addButton");
const deadlineInput = document.getElementById("deadlineInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = deadlineInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    taskList.appendChild(li);

    deadlineInput.value = "";
  }
}
