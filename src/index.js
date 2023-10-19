import createDisplayHandler from "./displayHandler";
import createItem from "./item";
import createProject from "./project";

const item1 = createItem(
  "fish takeout",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore ea facere debitis sint optio iste molestiae. Atque corporis fugit sequi exercitationem incidunt sapiente mollitia, minus vitae, veritatis deserunt saepe!
    Placeat animi in ea ab facilis distinctio maxime, ut vero? Pariatur aspernatur, voluptas eaque odio, molestiae reiciendis recusandae ullam hic assumenda ut molestias, dolorum cum suscipit. Voluptas, sint cumque. Aperiam!`,
  "I need to get some fish to make some takuyaki sushi",
  "2023-8-15",
  "High",
  false
);

const item2 = createItem(
  "Weeding",
  "Weed out the yard",
  "Get some weed killer for next month to cover more ground",
  "2023-11-30",
  "Medium",
  true
);

const item3 = createItem(
  "Searching",
  "find knife car keys",
  "Search room from tip to toe or else change keys",
  "2023-11-30",
  "High",
  false
);

const projects = [];

const project = createProject("Personal");
project.addItem(item1);
project.addItem(item2);

const project2 = createProject("Gym");
project2.addItem(item3);
project2.addItem(item2);

projects.push(project);
projects.push(project2);

console.log(project);
console.log(project2);

document.addEventListener("DOMContentLoaded", () => {
  const displayHandler = createDisplayHandler();
  displayHandler.renderProject(project);
  displayHandler.renderProject(project2);
});
