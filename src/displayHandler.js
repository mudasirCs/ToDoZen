import createItem from "./item";
import katana from "./katana.png";
import createProject from "./project";
import shuriken from "./shurikenAdd.svg";
import "./styles.css";
import tooltip from "./tooltip.svg";

export default function createDisplayHandler() {
  const main = document.querySelector("main");
  //later will use persistance layer, this is temporary
  let proj;
  //general implementation
  //split into create proj, add items, remove items
  //create loadProject function to load from persistance layer
  function renderProject(project) {
    proj = project;
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

    activateAddItemButtons(proj);
    initFormActions((item) => {
      proj.addItem(item);
    });
  }

  function renderItemListRefresh() {
    const projectContainer = document.querySelector(".project-container");

    const listItems = projectContainer.querySelectorAll("li.list-item");
    listItems.forEach((item) => {
      projectContainer.removeChild(item);
    });

    console.log("Entered into the den");
    const addBtn = document.querySelector(".add");

    proj.itemsList.forEach((element) => {
      const item = renderListItem(element);
      projectContainer.insertBefore(item, addBtn);
    });
  }

  function activateAddItemButtons() {
    const addBtns = document.querySelectorAll(".project-container img.add");
    addBtns.forEach((addBtn) => {
      addBtn.addEventListener("click", (e) => {
        const dialog = document.querySelector("dialog");
        dialog.showModal();
      });
    });
  }

  function initFormActions(callBackFn) {
    const dialog = document.querySelector("dialog");
    const form = document.querySelector("dialog form");

    const itemTitle = form.querySelector("#item-title");
    const itemDescription = form.querySelector("#item-description");
    const itemNotes = form.querySelector("#item-notes");
    const itemDueDate = form.querySelector("#item-due-date");
    const itemPriority = form.querySelector("#item-priority");
    const completedStatus = form.querySelector("#completed-status");

    const submitBtn = document.querySelector(".submit");

    //all validation rules should be made
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // const title = itemTitle.value;
      // const description = itemDescription.value;
      // const notes = itemNotes.value;
      // const dueDate = itemDueDate.value;
      // const priority = itemPriority.value;
      // const isCompleted = completedStatus.checked;

      // const item = createItem(
      //   title,
      //   description,
      //   notes,
      //   dueDate,
      //   priority,
      //   isCompleted
      // );

      itemTitle.value = "";
      itemDescription.value = "";
      itemNotes.value = "";
      //need to fix date intake/conversion
      itemDueDate.value = "";
      itemPriority.value = "";
      completedStatus.value = false;

      let item = createItem(
        "Template Title",
        "Template description, just some random text that needs to be added",
        "These are the template notes",
        "10,10,2025",
        "Medium",
        true
      );

      callBackFn(item);
      //update list again
      renderItemListRefresh();
      dialog.close();
    });

    const cancelBtn = document.querySelector(".cancel");
    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      dialog.close();
    });
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

    let priority;

    switch (item.priority) {
      case "High":
        priority = 1;
        break;
      case "Medium":
        priority = 2;
        break;
      case "Low":
        priority = 3;
        break;
      default:
        priority = 0;
        break;
    }
    for (let i = priority; i <= 3; i++) {
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

    li.appendChild(headDiv);
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
