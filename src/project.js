import createList from "./list";
//img path [property]
export default function createProject(projName) {
  return { projectName: projName, ...createList() };
}
