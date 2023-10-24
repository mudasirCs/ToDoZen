import createDisplayHandler from "./displayHandler";
import createItem from "./item";
import createProject from "./project";

const item1 = createItem(
  "fish takeout",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore ea facere debitis sint optio iste molestiae. Atque corporis fugit sequi exercitationem incidunt sapiente mollitia, minus vitae, veritatis deserunt saepe!
    Placeat animi in ea ab facilis distinctio maxime, ut vero? Pariatur aspernatur, voluptas eaque odio, molestiae reiciendis recusandae ullam hic assumenda ut molestias, dolorum cum suscipit. Voluptas, sint cumque. Aperiam!`,
  "I need to get some fish to make some takuyaki sushi",
  "2023-8-15",
  1,
  false
);
const item2 = createItem(
  "Weeding",
  "Weed out the yard",
  "Get some weed killer for next month to cover more ground",
  "2023-11-30",
  3,
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

const project = createProject("Personal", "blue");
project.addItem(item1);
project.addItem(item2);

projects.push(project);

document.addEventListener("DOMContentLoaded", () => {
  const displayHandler = createDisplayHandler(project);
});
