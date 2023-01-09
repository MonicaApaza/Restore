import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
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

export default function Header({darkTheme, changeTheme}:Props) {

    return (
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Re-store
                </Typography>
                <Switch  size="small" checked={darkTheme} onChange={ changeTheme } />
                <List sx={{display:'flex'}}>
                    {midLinks.map(({title,path})=>(
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={{color:'inherit', thypography:'h6'}}
                        >
                        {title.toUpperCase()}
                    </ListItem>
                    ))}
                </List>
                <List sx={{display:'flex'}}>
                    {rightLinks.map(({title,path})=>(
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={{color:'inherit', thypography:'h6'}}
                        >
                        {title.toUpperCase()}
                    </ListItem>
                    ))}
                </List>

            </Toolbar>
        </AppBar>

    )
}