import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardActionArea,
    Box,
    Divider,
    Grid,
  } from "@mui/material";
import { useParams } from "react-router-dom";
import PizzasArray from "../Data";

export default function Pizza() {
    const params = useParams();
    // console.log(params);
    const result = PizzasArray.find((p) => p.nombre === params.nombre);
    console.log(result.nombreimg);
    
    
    return (
        <Box
        sx={{
          display: "flex",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
          justifyContent:"center"
        }}
      >
        
          <Card
            
            sx={{
              transition: "0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              maxWidth: 500,
            }}
            >
                
            <CardActionArea>
              <CardMedia
                        component="img"
                        image={result.nombreimg}
                        height="250"
                        width="900"
                        alt={`imagen del producto ${result.nombre}`}
              />
              <CardContent>
                <Typography variant="h4"> {params.nombre}</Typography>
                <Typography component="p" variant="h6">
                  {result.descripcion}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Divider />
            <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Familiar:${result.precio.familiar}
            </Typography>
            
            <Typography variant="h6" sx={{ textAlign: "center" }}>
             
                    Mediana:${result.precio.mediana}
             
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                    
                    Extra Grande:${result.precio.extra_grande}
                </Typography>
                
            
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}
            >
              
            </CardActions>
          </Card>
       
      </Box>
        
    )
       
    

};