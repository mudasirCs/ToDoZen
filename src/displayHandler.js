import dateHandler from "./dateHandler";
import katana from "./katana.png";
import shuriken from "./shurikenAdd.svg";
import "./styles.css";
import tooltip from "./tooltip.svg";

export default function createDisplayHandler() {
  const main = document.querySelector("main");

  //general implementation
  //split into create proj, add items, remove items
  //create loadProject function to load from persistance layer
  function renderProject(proj) {
    const projectContainer = document.createElement("ul");
    projectContainer.classList.add("project-container");

    const projTitle = document.createElement("p");
    projTitle.classList.add("project-container-title");
    projTitle.innerHTML = proj.projectName;
    projectContainer.appendChild(projTitle);

    const projList = [];
    proj.itemsList.forEach((element, index) => {
      projList[index] = renderListItem(element);
    });

    projList.forEach((item) => {
      projectContainer.appendChild(item);
    });

    const addBtn = document.createElement("img");
    addBtn.src = shuriken;
    addBtn.alt = "Add";
    addBtn.classList.add("rotate-object", "add");

    projectContainer.appendChild(addBtn);

    main.appendChild(projectContainer);

    activateAddItemButtons();
    createItemPopUp();
  }

  /*  title,
  description,
  notes,
  dueDate,
  priority,
  completedStatus
 */

  function activateAddItemButtons() {
    const addBtns = document.querySelectorAll(".project-container img.add");
    addBtns.forEach((addBtn) => {
      addBtn.addEventListener("click", (e) => {
        createItemPopUp();
      });
    });
  }

  function createItemPopUp() {
    // Create a modal or dialog for adding an item
    const dialog = document.querySelector(".project-container dialog");
    dialog.show();
    dialog.classList.add("AddItemPopup");

    // Create input fields for item details
    const titleInput = document.createElement("input");
    titleInput.placeholder = "Title";

    const descriptionInput = document.createElement("input");
    descriptionInput.placeholder = "Description";

    const notesInput = document.createElement("input");
    notesInput.placeholder = "Notes";

    const dueDateInput = document.createElement("input");
    dueDateInput.placeholder = "Due Date";

    const priorityInput = document.createElement("input");
    priorityInput.placeholder = "Priority";

    const addButton = document.createElement("button");
    addButton.textContent = "Add Item";

    addButton.addEventListener("click", () => {
      // Retrieve the input values and create an item object
      const newItem = {
        title: titleInput.value,
        description: descriptionInput.value,
        notes: notesInput.value,
        dueDate: dueDateInput.value,
        priority: priorityInput.value,
        completedStatus: false, // Default to false
      };

      // You can add validation and create the item here
      console.log("New Item:", newItem);

      // Close the modal after adding the item
      modal.style.display = "none";
    });

    modal.appendChild(titleInput);
    modal.appendChild(descriptionInput);
    modal.appendChild(notesInput);
    modal.appendChild(dueDateInput);
    modal.appendChild(priorityInput);
    modal.appendChild(addButton);

    main.appendChild(modal);
  }

  function renderListItem(item) {
    const li = document.createElement("li");
    li.classList.add("list-item");

    const headDiv = document.createElement("div");
    headDiv.classList.add("list-item-head");

    const title = document.createElement("p");
    title.classList.add("list-item-title");
    title.textContent = item.title;

    const tooltipImg = document.createElement("img");
    tooltipImg.classList.add("list-item-img");
    tooltipImg.src = tooltip;
    tooltipImg.alt = "tooltip";
    tooltipImg.title = item.notes;

    //have to add created and dueDate in container
    const date = document.createElement("p");
    date.classList.add("list-item-date");
    date.textContent = item.dueDate;

    headDiv.appendChild(title);
    headDiv.appendChild(tooltipImg);
    headDiv.appendChild(date);

    const description = document.createElement("p");
    description.classList.add("list-item-description");
    description.textContent = item.description;

    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("list-item-priority-container");

    for (let i = 0; i < item.priority; i++) {
      const priorityImg = document.createElement("img");
      priorityImg.classList.add("list-item-priority");
      priorityImg.src = katana;
      priorityImg.alt = "level";
      priorityDiv.appendChild(priorityImg);
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("list-item-status");
    checkbox.checked = item.completedStatus;

    //if checkbox is checked

    li.appendChild(description);
    li.appendChild(priorityDiv);
    li.appendChild(checkbox);

    return li;
  }

  // need to add a toggle checkbox function for
  // making relevant changes
  // function checkbox

  return { renderProject };
}
