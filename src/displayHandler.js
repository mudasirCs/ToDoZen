import { findProjectByName } from "./index";
import createItem from "./item";
import katana from "./katana.png";
import shuriken from "./shurikenAdd.svg";
import "./styles.css";
import tooltip from "./tooltip.svg";

export default function createDisplayHandler() {
  const main = document.querySelector("main");

  //later will use persistance layer, this is temporary

  //split into create proj, add items, remove items
  //create loadProject function to load from persistance layer

  // function initDisplayHanlder() {
  //   fillForm();
  // }

  function renderProjectLoad(proj) {
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

  function renderProjectAdd(proj) {}

  function renderProjectUnload(proj) {
    const projectContainer = document.querySelector(`.${proj.projectName}`);

    const projTitle = document.querySelector(
      `.${proj.projectName} .project-container-title`
    );
    projectContainer.removeChild(projTitle);

    const projList = document.querySelectorAll(
      `.${proj.projectName} li.list-item`
    );

    projList.forEach((item) => {
      projectContainer.removeChild(item);
    });

    const addBtn = document.querySelector(`.${proj.projectName} .add`);
    addBtn.removeEventListener("click", () => {
      executeForm(proj);
    });
    projectContainer.removeChild(addBtn);

    main.removeChild(projectContainer);
  }

  function activateAddItemButton(proj) {
    // To prevent multiple event listeners on a button
    const addBtn = document.querySelector(`.${proj.projectName} .add`);

    addBtn.addEventListener("click", () => {
      executeForm(proj);
    });
  }

  async function executeForm(proj) {
    const dialog = document.querySelector("dialog");
    dialog.showModal();

    fillForm().then(({ item, removeEventListener }) => {
      // removeEventListener();
      if (item == null) {
        // console.log("returning item as null");
        return;
      } else {
        // console.log("item is not null");
        // console.log(`returned from function: ${item}`);
        proj.addItem(item);
        renderItemListRefresh(proj);
      }
    });
  }

  function fillForm() {
    return new Promise((resolve) => {
      const form = document.querySelector("dialog form");

      const submitEvent = (e) => {
        e.preventDefault();

        const dialog = document.querySelector("dialog");

        const itemTitle = form.querySelector("#item-title");
        const itemDescription = form.querySelector("#item-description");
        const itemNotes = form.querySelector("#item-notes");
        const itemDueDate = form.querySelector("#item-due-date");
        const itemPriority = form.querySelector("#item-priority");
        const completedStatus = form.querySelector("#completed-status");

        const item = createItem(
          itemTitle.value,
          itemDescription.value,
          itemNotes.value,
          itemDueDate.value,
          itemPriority.value,
          completedStatus.checked
        );

        itemTitle.value = "";
        itemDescription.value = "";
        itemNotes.value = "";
        itemDueDate.value = "";
        itemPriority.value = "";
        completedStatus.value = false;

        console.log(`Inside Submit function: ${item}`);
        dialog.close();
        return item;
        // form.removeEventListener("submit", (e) => {
        //   submitEvent(e);
        // });
      };

      const cancelEvent = (e) => {
        e.preventDefault();

        const dialog = document.querySelector("dialog");

        console.log(`Inside Cancel function`);
        dialog.close();
        return null;
      };

      const submitHandler = (e) => {
        const item = submitEvent(e);
        removeEventListeners();
        resolve({ item, removeEventListeners });
      };
      const cancelHandler = (e) => {
        const item = cancelEvent(e);
        removeEventListeners();
        resolve({ item, removeEventListeners });
      };

      form.addEventListener("submit", submitHandler, { once: true });

      const cancelBtn = document.querySelector(".cancel");
      cancelBtn.addEventListener("click", cancelHandler, { once: true });

      function removeEventListeners() {
        form.removeEventListener("submit", submitHandler);
        cancelBtn.removeEventListener("click", cancelHandler);
      }
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

  return { renderProjectLoad, renderProjectUnload };
}
