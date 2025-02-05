import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@mui/material';

function LandmarkDetail({ open, onClose, landmark }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{landmark.name}</DialogTitle>
            <DialogContent>
                <img src={landmark.image} alt={landmark.name} style={{ width: '100%' }} />
                <DialogContentText>
                    {landmark.detailedDescription}
                </DialogContentText>
                <Typography variant="h6">History</Typography>
                <DialogContentText>
                    {landmark.history}
                </DialogContentText>
                <Typography variant="h6">Interesting Facts</Typography>
                <DialogContentText>
                    {landmark.facts}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default LandmarkDetail;
