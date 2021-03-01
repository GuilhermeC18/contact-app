import { useState, useEffect } from 'react';
import useAsyncError from './useAsyncError';


export default function useProjectsByTech() {
    const [error, setError] = useState('');
    const [projectsByTech, setProjectsByTech] = useState(); 
    const throwError = useAsyncError;
   
    
    const fetchApi = (path, method, body) => {
        return fetch(`/api/user/technology/${path}`, {
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
     
    const findProjectByTech = (technologyId) => {
        console.log(technologyId, "techId");
        fetchApi(`/${technologyId}`, 'GET', )
        .then((projects) =>{
            console.log(projects, "projectsbyTech")
            setProjectsByTech([...projectsByTech, projects]);
        })
        .catch((err) =>{
            setError(err.message);
        })
    };


/*
const addProjecTech = (projectId, techId) => {
    fetchApi(`${projectId}/technology`, 'POST', {techId})
      .then((project) => {
        setProjects([...projects, project]);
      })
      .catch((err) =>{
          setError(err.message);
      })
 }


*/
    return {
        error,
        projectsByTech,
        onFindProjectByTech: (technologyId) => findProjectByTech(technologyId),
    };
  }
