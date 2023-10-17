import createList from "./list";

export default function createProject(projName) {
  return { projectName: projName, ...createList() };
}
