import { Paper, Typography } from '@mui/material';

function About() {
    return (
        <Paper sx={{ padding: '16px', marginTop: '16px' }}>
            <Typography variant="h4">About</Typography>
            <Typography variant="body1">
                This website provides detailed information about famous landmarks around the world. It was created to help people learn more about these amazing places and their histories.
            </Typography>
            <Typography variant="body1">
                Created by Morten Bonderup.
            </Typography>
        </Paper>
    );
}

export default About;
