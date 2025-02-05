import { Grid2, Card, CardContent, CardMedia, Typography } from '@mui/material';

function LandmarkList({ landmarks, onCardClick }) {

    return (
        <Grid2 container spacing={3} sx={{ justifyContent: 'center', marginTop: 3, }}>
            {landmarks.map((landmark, index) => (
                <Grid2 item xs={12} sm={6} md={4} key={index}>
                    <Card onClick={() => onCardClick(landmark)}>
                        <CardMedia
                            component="img"
                            alt={landmark.name}
                            height="140"
                            image={landmark.image}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {landmark.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {landmark.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            ))}
        </Grid2>
    );
}

export default LandmarkList;
