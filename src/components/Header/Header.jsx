import { Avatar, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
    
            // <Container maxWidth="sm">
                <Stack px={4}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} py={2} >
                    <Typography variant={'h4'}>Knowledge Cafe</Typography>

                     <Avatar alt="JFSS" src="https://avatars.githubusercontent.com/u/42909226?v=4?s=400" />
                </Stack>
                <Divider light/>
                </Stack>


            // </Container>
       
       
    );
};

export default Header;