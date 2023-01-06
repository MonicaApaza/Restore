import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props{
    darkTheme : boolean,
    changeTheme:() => void
}


export default function Header({darkTheme, changeTheme}:Props) {

    return (

        <AppBar position="static" sx={{mb:4}}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Re-store
                </Typography>
                <Switch  size="small" checked={darkTheme} onChange={ changeTheme } />
            </Toolbar>
        </AppBar>

    )
}