import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = () => {
    return (
        
        <ListGroup.Item className="d-flex justify-content-between">Ejemplo de tarea
            <Button variant='danger'>borrar</Button>
        </ListGroup.Item>
    
    );
};

export default ItemTarea;