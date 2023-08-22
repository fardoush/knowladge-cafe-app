import { useTheme } from '@emotion/react';
import {Alert, alpha, Box, Stack, styled, Typography} from '@mui/material';
import React from 'react';
import BookMarkBlog from './BookMarkBlog';

const RightSide = () => {

    const StyleBox = styled(Box) (({theme}) => ({
        backgroundColor: alpha(theme.palette.success.main,0.2),
        border: '1px solid green[500]',
        borderColor: 'green[500]'

    }))

   
    return (
        <Stack>

            {/*<StyleBox p={4}>*/}
            {/*    <Typography variant={'body2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, impedit.</Typography>*/}


            {/*</StyleBox>*/}
            
           <Box pb={3}>
           <Alert>
                <Typography variant='h5'>Spent time on read : 170 min</Typography>
            </Alert>
           </Box>
           <BookMarkBlog/> 
        </Stack>
    );
};

export default RightSide;