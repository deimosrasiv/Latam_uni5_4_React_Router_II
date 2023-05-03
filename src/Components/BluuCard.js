import { Card, CardMedia, CardContent,  Typography, CardActions, Button, CardActionArea } from "@mui/material";




export default function BluuCard({Pizzas}) {
    return (
        <Card
            sx={{
                transition: "0.2s",
                "&:hover": {
                    transform: "scale(1.05)",
                },
                maxWidth:250
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                image="https://via.placeholder.com/1000x200"
                    height="200"
                    width="900"
                alt="imagen del producto"
            />
                <CardContent>
                    <Typography variant="h5"> Titulo de la Card</Typography>
                    <Typography
                        component="p"
                        variant="body"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque, eius officiis reiciendis mollitia at vero porro adipisci. Obcaecati accusamus accusantium eius enim sapiente ducimus eveniet vel iure commodi laudantium?
                    </Typography>
                </CardContent>

            </CardActionArea>
                <CardActions>
                    <Button variant="contained">Add</Button>
                    <Button color="error">Remove</Button>
                </CardActions>
                

           

        </Card>
    )
}