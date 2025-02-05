import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PlaceIcon from '@mui/icons-material/Place';
import InfoIcon from '@mui/icons-material/Info';

function Footer() {
    return (
        <BottomNavigation showLabels>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Landmarks" icon={<PlaceIcon />} />
            <BottomNavigationAction label="About" icon={<InfoIcon />} />
        </BottomNavigation>
    );
}

export default Footer;
