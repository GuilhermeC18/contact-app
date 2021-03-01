//Custom Hooks 
import useAdminProjects from '../../hooks/useAdminProjects';
import useAsyncError from '../../hooks/useAsyncError';

//React Hooks 
import { useEffect, useState } from 'react';

//Styled Components 
import {Item} from '../input';

//Material-UI
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';


export default function AdminProjects(){
  const { error, projects, onAdd, onDelete, onUpdate } = useAdminProjects();
  const throwError = useAsyncError();
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  
  const uploadImage = (event) => {
      console.log(event.target.files[0]);
      setFile(event.target.files[0]);
  };
      


  console.log("project fetch", projects);
  return (
      <>
      <h2>Project List</h2>
      {error && <h1>{error}</h1>}
      <p>add project</p>
      <AddIcon />
      {projects && projects.map((project) => 
          <>
          <Item>
           <p>{project.name}</p>
           <p>{project.date}</p>
           <p>{project.link}</p>
           <AddPhotoAlternateIcon />
           <DeleteIcon onClick={()=>{
               onDelete(project.id);
           }} />
           <EditIcon  />
           {project.technologies.map((t) => <p>{t.name}</p>)}
           </Item>
           </> 
        )}    
   </>
  )
}