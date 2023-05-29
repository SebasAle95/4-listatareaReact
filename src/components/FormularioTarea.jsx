import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Listatareas from "./Listatareas";

const FormularioTarea = () => {

    const [tarea, setTarea]= useState('');
    const [listatarea, setListatarea]= useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setListatarea([...listatarea, tarea])
        setTarea("");
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
                <Form.Control type="text" placeholder="ingrese una tarea" onChange={(e)=> setTarea(e.target.value)}
                value={tarea}/>
                <Button variant="primary" type="submit">Agregar</Button>
        </Form.Group>
    </Form>
    <Listatareas></Listatareas>
    </>
    );
};

export default FormularioTarea;