import { useTheme } from '@emotion/react';
import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const BookMarkBlog = () => {
    const theme = useTheme();
    return (
        <Stack p={3.75} sx={{backgroundColor: 'rgba(17, 17, 17, 0.05)'}}>
            <Typography variant='h4' pb={2}> Bookmarked Blogs : 8</Typography>
            <Paper elevation={0} sx={{p:2.5, mb:2}} >
                <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur? Nobis optio molestiae corrupti sit.</Typography>

            </Paper>
            <Paper elevation={0} sx={{p:2.5, mb:2}} >
                <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur? Nobis optio molestiae corrupti sit.</Typography>

            </Paper>
        </Stack>
    );
};

export default BookMarkBlog;