import { useState, useEffect } from 'react';
import useAsyncError from './useAsyncError';

export default function useAdminTech() {
const [errort, setError] = useState('');
const [tech, setTech] = useState(); 
const throwError = useAsyncError;

useEffect(() => {
    fetchApi('/')
        .then((t) => {
            console.log(t)
            setTech(t);
        })
        .catch((err) => setError(err));
}, []);


const fetchApi = (path, method, body) => {
    return fetch(`/api/admin/tech`, {
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

const addTechnology = () => {
    let newTech = { name: "New Tech"};
    fetchApi(`/`, 'POST', newTech)
      .then((t)=>{
          setTech([...tech, t]);
      })
       .catch((err) => {
           setError(err.message);
       });
};


const deleteTechnology = (techId) => {
    fetchApi(`/${techId}`, 'DELETE')
      .then((deletedTech) => {
          setTech((tech) =>
          tech.filter((t)=> deletedTech.id !== t.id)
          );
      })
      .catch((err) => setError(err.message));
};

const updateTechnology =(techId, newData) => {
    fetchApi(`/${techId}`, 'PUT', { name: newData.name})
      .then((updatedTech) => {
          setTech((tech) =>
              tech.map((t) => {
                  if(t.id === updatedTech.id) {
                      return updatedTech;
                  }
                  return tech;
              })
            );
      })
      .catch((err) => setError(err.message));
}


  return {
      errort,
      tech,
      onAdd: addTechnology,
      onDelete: (techId) => deleteTechnology(techId),
      onUpdate: (techId, newData) => updateTechnology(techId, newData),
  };
}