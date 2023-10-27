import createProject from "./project";

export default function LocalStorageHandler() {
  function createProjects() {
    const project = createProject("Personal");
    const projects = [];
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects));
    return projects;
  }

  function loadProjects() {
    if (localStorage.getItem("projects")) {
      const projectData = JSON.parse(localStorage.getItem("projects"));
      console.log(projectData);
      const projects = projectData.map((project) => {
        return createProject(project.projectName, project.itemsList);
      });
      return projects;
    } else {
      const projects = createProjects();
      return projects;
    }
  }

  function saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  // check for not allowing mutliple same project
  function addProject(newProject) {
    const projects = loadProjects();

    const index = projects.findIndex(
      (project) => project.projectName === newProject.projectName
    );

    if (index == -1) {
      projects.push(newProject);
      saveProjects(projects);
    }
  }

  function updateProject(updatedProject) {
    const projects = loadProjects();

    // const index = indexFinder(projects, updateProject);
    const index = projects.findIndex(
      (project) => project.projectName === updatedProject.projectName
    );

    if (index !== -1) {
      projects[index] = updatedProject;
      saveProjects(projects);
    } else {
      console.log("project not found");
      console.log(updatedProject);
    }
  }

  function popProject() {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    if (projects.length > 0) {
      return createProject(projects[0].projectName, projects[0].itemsList);
    }
    return {}; // Return an empty object instead of null
  }

  function removeProject(projectToRemove) {
    const projects = loadProjects();

    const index = projects.findIndex(
      (project) => project.projectName === projectToRemove.projectName
    );

    if (index !== -1) {
      projects.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(projects));
    } else {
      console.log(`Project does not exist ${projectToRemove}`);
    }
  }

  return {
    loadProjects,
    saveProjects,
    addProject,
    removeProject,
    updateProject,
    popProject,
  };
}
