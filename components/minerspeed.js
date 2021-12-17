import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import GaugeChart from 'react-gauge-chart';


const Minerspeed = (props) =>{
    var value = "9.7 MHs"
    return (
        <Card {...props} >
            
            
            <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                    Hashrate
                </Typography>
                <Box>
                    <Typography color="textPrimary" variant="h5">
                        {value}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Minerspeed;

//style={{width:"80%", height:"80%"}}