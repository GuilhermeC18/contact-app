import useAdminTech from '../../hooks/useAdminTech'


export default function AdminTech() {
    const { tech, error, onAdd, onDelete, onUpdate} = useAdminTech();

    return(
        <>
        <h2>Technologies</h2>
        {tech&&tech.map((t) => <p>{t.name}</p>)}
        </>
    );
}