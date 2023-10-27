import createDisplayHandler from "./displayHandler";
import LocalStorageHandler from "./storage";
import "./styles.css";

const localStorageHandler = LocalStorageHandler();
let projects = localStorageHandler.loadProjects();
console.log(projects);

document.addEventListener("DOMContentLoaded", () => {
  const displayHandler = createDisplayHandler(projects);
});
