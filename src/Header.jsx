import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Header() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Famous Landmarks
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Landmarks</Button>
                    <Button color="inherit">About</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;


