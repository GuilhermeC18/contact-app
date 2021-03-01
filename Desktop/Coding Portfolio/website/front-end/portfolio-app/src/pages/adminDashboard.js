import AdminProjects from '../components/admin_components/projects';
import AdminTech from '../components/admin_components/technologies';
import { Item } from '../components/input';

export default function AdminDashboard() {
 
    return (
        <>  
            <h1>Admin Dashboard</h1>
            <AdminProjects />
            <AdminTech />
        </>
    )
}