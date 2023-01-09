import { Badge, ShoppingCart } from "@mui/icons-material";
import { AppBar, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


interface Props{
    darkTheme : boolean,
    changeTheme:() => void
}

const midLinks =[ 
    {title : 'catalog', path: '/catalog'},
    {title : 'about', path: '/about'},
    {title : 'contact', path: '/contact'} 
];

const rightLinks =[ 
    {title : 'login', path: '/login'},
    {title : 'register', path: '/register'}
];

const navStyles = {
    color:'inherit', 
    thypography:'h6',
    '&:hover': {
       color: 'grey.500'
    },
    '&.active': {
       color: 'text.secondary'
    }
   
}

export default function Header({darkTheme, changeTheme}:Props) {

    return (
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='center'>
                    <Typography variant="h6" component={NavLink} 
                        exact
                        to='/'
                        sx={navStyles}
                        color="inherit">
                        Re-store
                    </Typography>
                    <Switch  size="small" checked={darkTheme} onChange={ changeTheme } />
                </Box>

                <Box>
                    <List sx={{display:'flex'}}>
                        {midLinks.map(({title,path})=>(
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                            >
                            {title.toUpperCase()}
                        </ListItem>
                        ))}
                    </List>
                </Box>

                <Box display='flex' alignItems='center'>
                    <IconButton size='large' sx={{color: 'inherit'}}>
                        <Badge color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>      
                    <List sx={{display:'flex'}}>
                        {rightLinks.map(({title,path})=>(
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                            >
                            {title.toUpperCase()}
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>

    )
}