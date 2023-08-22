import {Box, Button, Grid, Paper} from '@mui/material';
import React from 'react';
import Header from './components/Header/Header';
import LeftSide from './components/leftSide/LeftSide';
import RightSide from './components/rightSide/RightSide';
// import {Toaster} from "react-hot-toast";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {

  const notify = () => toast.success('Successfully created!');;
  return (
    <Box>
      <Header/>
      <Paper elevation={0} >
        <Grid container spacing={2} p={4}>
          <Grid item xs={8}>
            <LeftSide/>

          </Grid>
          <Grid item xs={4}>
            <RightSide/>
          </Grid>
        </Grid>
      </Paper>

      <Box>
        <Button onClick={notify}>Make me a toast</Button>
        <Toaster position={"bottom-right"} />
      </Box>


        {/*<Toaster*/}
        {/*    position="bottom-right"*/}
        {/*    reverseOrder={false}*/}
        {/*/>*/}
    </Box>
  );
};

export default App;