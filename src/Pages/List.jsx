
import { Link } from "react-router-dom";
import PizzasArray from "../Data";
import { Typography } from "@mui/material";

export default function List() {
    const Pizzas = PizzasArray;
    
    
    return (
        <div>
            {Pizzas.map((element) => (
                <li key={element.nombre}>
                    
                    <Link to={`/pizza/${element.nombre}`}>

                    {element.id} - {element.nombre}
                    </Link>
                </li>
            ))}
        </div>
        
    )
       
    

};