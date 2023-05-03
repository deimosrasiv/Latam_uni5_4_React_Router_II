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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PizzasArray from "../Data";
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function BluuCard() {
  const Pizzas = PizzasArray;
  



  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
      }}
    >
      {Pizzas.map((element) => (
        <Card
          key={element.nombre}
          sx={{
            transition: "0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
            maxWidth: 300,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={element.nombreimg}
              height="100"
              width="900"
              alt="imagen del producto"
            />
            <CardContent>
              <Typography variant="h5"> {element.nombre}</Typography>
              <Typography component="p" variant="body">
                {element.descripcion}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Divider />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            ${element.precio.familiar}
          </Typography>
          <Divider />
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6} >
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<AddShoppingCartIcon />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={6}sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  component="a"
                    color="success"
                  size="small"
                  href={`/Pizza/${element.nombre}`}
                    endIcon={<VisibilityIcon />}
                >
                  Ver
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
