import { findProjectByName } from "./index";
import createItem from "./item";
import katana from "./katana.png";
import shuriken from "./shurikenAdd.svg";
import "./styles.css";
import tooltip from "./tooltip.svg";

export default function createDisplayHandler() {
  const main = document.querySelector("main");
  let standardItem = createItem(
    "Template Title",
    "Template description, just some random text that needs to be added",
    "These are the template notes",
    "2025-10-8",
    "Medium",
    true
  );

  //later will use persistance layer, this is temporary

  //split into create proj, add items, remove items
  //create loadProject function to load from persistance layer

  // function initDisplayHanlder() {
  //   initFormActions();
  // }

  function initFormActions() {
    return new Promise((resolve) => {
      const dialog = document.querySelector("dialog");
      const form = document.querySelector("dialog form");

      const itemTitle = form.querySelector("#item-title");
      const itemDescription = form.querySelector("#item-description");
      const itemNotes = form.querySelector("#item-notes");
      const itemDueDate = form.querySelector("#item-due-date");
      const itemPriority = form.querySelector("#item-priority");
      const completedStatus = form.querySelector("#completed-status");

      // Add event listeners for the form submission and cancel
      form.addEventListener(
        "submit",
        (e) => {
          e.preventDefault();

          const item = createItem(
            itemTitle.value,
            itemDescription.value,
            itemNotes.value,
            itemDueDate.value,
            itemPriority.value,
            completedStatus.checked
          );

          standardItem = item;

          itemTitle.value = "";
          itemDescription.value = "";
          itemNotes.value = "";
          itemDueDate.value = "";
          itemPriority.value = "";
          completedStatus.value = false;

          dialog.close();
          resolve(); // Resolve the Promise when the form is submitted
        },
        { once: true }
      );

      const cancelBtn = document.querySelector(".cancel");
      cancelBtn.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          dialog.close();
          resolve(); // Resolve the Promise when the form is canceled
        },
        { once: true }
      );
    });
  }

  function renderProject(proj) {
    const projectContainer = document.createElement("ul");
    projectContainer.classList.add("project-container");
    projectContainer.classList.add(`${proj.projectName}`);

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
    //may remove this, if not used
    addBtn.setAttribute("data-project-name", proj.projectName);

    projectContainer.appendChild(addBtn);

    main.appendChild(projectContainer);

    activateAddItemButton(proj);
  }

  async function activateAddItemButton(proj) {
    // To prevent multiple event listeners on a button
    const addBtn = document.querySelector(`.${proj.projectName} .add`);
    const dialog = document.querySelector("dialog");

    addBtn.addEventListener("click", async (e) => {
      dialog.showModal();

      await initFormActions();

      proj.addItem(standardItem);
      renderItemListRefresh(proj);
    });
  }

  function renderItemListRefresh(proj) {
    const projectContainer = document.querySelector(`.${proj.projectName}`);

    const listItems = projectContainer.querySelectorAll(
      `.${proj.projectName} li.list-item`
    );
    listItems.forEach((item) => {
      projectContainer.removeChild(item);
    });

    const addBtn = document.querySelector(`.${proj.projectName} .add`);

    proj.itemsList.forEach((element) => {
      const item = renderListItem(element);
      projectContainer.insertBefore(item, addBtn);
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

    for (let i = item.priority; i <= 3; i++) {
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

  return { renderProject };
}
