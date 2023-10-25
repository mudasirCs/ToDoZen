import listPrototype from "./list";
//img path [property]
//project color property
export default function createProject(projName, list = []) {
  return Object.assign({}, listPrototype, {
    projectName: projName,
    // projectImage: projImg,
    itemsList: [...list],
  });
}
