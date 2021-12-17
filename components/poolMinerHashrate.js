import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography, useTheme } from '@mui/material';
import React, {useEffect, useState} from 'react';
import GaugeChart from 'react-gauge-chart';


function calculartiempo(tsegundos)
    {
        let dias = tsegundos / (3600 * 24);
        let horas = (tsegundos / 3600);
        let minutos = ((tsegundos-horas * 3600)/60);
        let segundos = tsegundos-((horas * 3600) + (minutos * 60));
        return dias + ":" + horas + ":" + minutos + ":" + segundos;
    }
    

const PoolMinerHashrate = (props) =>{
    var value = "11.7 MHs";
    
    
    const [hashrate, setdata] = useState([{"5min": 0, "1h": 0, "6h": 0, "12h": 0, "24h": 0}]);

    useEffect(() =>{
        fetch(`https://www.ravenminer.com/api/v1/wallet/RLwhueGaLsiAVZmh1JWF23GQ2TKQS628tS`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        })
        .then((r) => r.json())
        .then((res) => {
            setdata(res["hashrate"]);
            console.log(res);
        })
        .catch((err) => console.log(err));
        
    },[]);

    return (
        <Card {...props} >
            <CardContent>
                <Grid container spacing={3} >
                    
                    <Grid item>
                        <Typography color="textSecondary" gutterBottom variant="overline">
                            Hashrate
                        </Typography>
                        <Typography color="textPrimary" variant="h5">
                            {Math.round((hashrate["5min"]/1e6 + Number.EPSILON) * 100) / 100} MHs
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" gutterBottom variant="overline">
                            1 Hora
                        </Typography>
                        <Typography color="textPrimary" variant="h5">
                            {Math.round((hashrate["1h"]/1e6 + Number.EPSILON) * 100) / 100} MHs
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" gutterBottom variant="overline">
                            6 Hora
                        </Typography>
                        <Typography color="textPrimary" variant="h5">
                            {Math.round((hashrate["6h"]/1e6 + Number.EPSILON) * 100) / 100} MHs
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" gutterBottom variant="overline">
                            12 Hora
                        </Typography>
                        <Typography color="textPrimary" variant="h5">
                            {Math.round((hashrate["12h"]/1e6 + Number.EPSILON) * 100) / 100} MHs
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" gutterBottom variant="overline">
                            24 Hora
                        </Typography>
                        <Typography color="textPrimary" variant="h5">
                            {Math.round((hashrate["24h"]/1e6 + Number.EPSILON) * 100) / 100} MHs
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default PoolMinerHashrate;

