import { useState, useEffect } from 'react';
import useAsyncError from './useAsyncError';

export default function useAdminProjects() {
const [error, setError] = useState('');
const [projects, setProjects] = useState(); 
const throwError = useAsyncError;

useEffect(() => {
    fetchApi('/')
        .then((projects) => {
            console.log(projects)
            setProjects(projects);
        })
        .catch((err) => setError(err));
}, []);


const fetchApi = (path, method, body) => {
    return fetch(`/api/admin/project`, {
    method, 
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(body),
})
   .then((resp) => {
      if(!resp) {
        return resp.json().then((json) =>{
            console.log(resp.status);
            const error = new Error(json.message);
            error.status = resp.status;
            throw error; 
        });
      }
    return resp.json();
    });
};

const addProject = () => {
    let newProject = { name: "New Project", date: "New Date", link: "New Link" };
    fetchApi(`/`, 'POST', newProject)
      .then((project)=>{
          setProjects([...projects, project]);
      })
       .catch((err) => {
           setError(err.message);
       });
};

const addProjecTech = (projectId, techId) => {
    fetchApi(`${projectId}/technology`, 'POST', {techId})
      .then((project) => {
        setProjects([...projects, project]);
      })
      .catch((err) =>{
          setError(err.message);
      })
 }

const deleteProject = (projectId) => {
    fetchApi(`/${projectId}`, 'DELETE')
      .then((deletedProject) => {
          setProjects((projects) =>
          projects.filter((project)=> deletedProject.id !== project.id)
          );
      })
      .catch((err) => setError(err.message));
};

const updateProject =(projectId, newData) => {
    fetchApi(`/${projectId}`, 'PUT', newData)
      .then((updatedProject) => {
          setProjects((projects) =>
              projects.map((project) => {
                  if(project.id === updatedProject.id) {
                      return updatedProject;
                  }
                  return project;
              })
            );
      })
      .catch((err) => setError(err.message));
}

  return {
      error,
      projects,
      onAdd: addProject,
      onDelete: (projectId) => deleteProject(projectId),
      onUpdate: (projectId, newData) => updateProject(projectId, newData),
      onAddProjectTech: (projectId, techId) => addProjecTech(projectId, techId),
  };
}