import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Listatareas from "./Listatareas";
import ItemTarea from "./ItemTarea";


const FormularioTarea = () => {
    let tareasDellocalStorage = JSON.parse(localStorage.getItem('tareas')) || [];
    const [tarea, setTarea]= useState('');
    const [listatarea, setListatarea]= useState([tareasDellocalStorage]);

    useEffect(()=>{
        //console.log('aquie deberia guardar en localstorage')
        localStorage.setItem('tareas', JSON.stringify(listatarea))
    }, [listatarea]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setListatarea([...listatarea, tarea])
        setTarea("");
    };

    const borrarTarea = (nombreTarea)=> {
        let copiaListatarea = listatarea.filter((itemTarea)=> itemTarea !== nombreTarea);
        setListatarea(copiaListatarea);
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
    <Listatareas listatarea={listatarea}  borrarTarea={borrarTarea}></Listatareas>
    </>
    );
};

export default FormularioTarea;