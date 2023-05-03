import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import {NavLink} from "react-router-dom"



export default function Navbar({ navArrayLinks }) {
    const [open, setOpen]= useState(false)
    return (
        <>
        
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { sm: "none", xs: "flex" } }}
                        edge="start"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                    >
                       Pizzeria Mamma Mia!
                    </Typography>

                    <Box sx={{ display: {xs:"none", sm:"block"} }}>
                    {navArrayLinks.map(item => (
                        <Button
                        color={item.color}
                        key={item.title}
                            component={NavLink}
                            
                        to={item.path}
                        >
                            {item.title}
                        </Button>
                        ))
                    }
                    </Box>
                </Toolbar>
            </AppBar>
            
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{ display: { sm: "none", xs: "flex" } }}
            >
                <NavListDrawer
                    navArrayLinks={navArrayLinks}
                    NavLink={NavLink}
                    setOpen={setOpen}
                />
            </Drawer>
        </>
    )
}