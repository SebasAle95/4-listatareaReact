import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const Listatareas = ({listatarea, borrarTarea}) => {
    return (
        <ListGroup>
            {
                listatarea.map( (tarea, indiceTarea)=> <ItemTarea tarea={tarea} key={indiceTarea}  borrarTarea={borrarTarea}></ItemTarea>)
            }
            
            
        </ListGroup>
    );
};

export default Listatareas;