import React, {useEffect, useState} from 'react';
import { Box, Container, Grid } from "@mui/material";
import Head from 'next/head';
import Minerspeed from '../components/minerspeed';
import PoolMinerHashrate from '../components/PoolMinerHashrate';


const Dashboard = () => {

  return (

    <>
      <Head>
        <title>Miner Dashboard</title>
      </Head>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
        <Container maxWidth={false}>
          <Grid container spacing={3} justifyContent="space-around" >
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Minerspeed sx={{height: "100%"}} />
            </Grid>
            <Grid item lg={7} sm={6} xl={3} xs={12}>
              <PoolMinerHashrate sx={{height: "100%"}} />
            </Grid>
            {/* <Grid item lg={3} sm={6} xl={3} xs={12}>
              <PoolMinerHashrate sx={{height: "100%"}} />
            </Grid>
            <Grid item lg={8} sm={6} xl={3} xs={12}>
              <PoolMinerHashrate sx={{height: "100%"}} />
            </Grid>
            <Grid item lg={4} sm={6} xl={3} xs={12}>
              <PoolMinerHashrate sx={{height: "100%"}} />
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
//https://www.ravenminer.com/api/v1/charts/RLwhueGaLsiAVZmh1JWF23GQ2TKQS628tS/hashrate


export default Dashboard;