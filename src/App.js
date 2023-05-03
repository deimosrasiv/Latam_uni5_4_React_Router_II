import { Container } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto"
import Pizzas from "./Pages/Pizzas"
import Pizza from "./Pages/Pizza"
import List from "./Pages/List"



import InboxIcon from "@mui/icons-material/Inbox";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ContactMailIcon from '@mui/icons-material/ContactMail';


const navArrayLinks = [
  {
      title: "Home",
      path: "/",
      color: "inherit",
      icon:<InboxIcon/>
  },
  {
    title: "Contacto",
    path: "/Contacto",
    color: "inherit",
    icon: <ContactMailIcon />
  },   
  {
      title: "Pizzas",
      path: "/pizzas",
      color: "inherit",
      icon:<LocalPizzaIcon/>
  },
  
  
  
]



export default function App() {
  return (
    <>
      
      <Navbar navArrayLinks={ navArrayLinks} />
      <Container sx={{ mt: 5 }} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Pizzas" element={<Pizzas />} />
          
          <Route path="/Pizza/:nombre" element={<Pizza />} />
         
            
            



          
          
       </Routes>
        
      </Container>

      
    </>
  );
}