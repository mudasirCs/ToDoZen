import createList from "./list";
//img path [property]
//project color property
export default function createProject(projName, projClr = "red") {
  return {
    projectName: projName,
    // projectImage: projImg,
    projectColor: projClr,
    ...createList(),
  };
}
