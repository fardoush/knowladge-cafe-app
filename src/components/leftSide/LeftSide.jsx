import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BlogCard from './blogCard/BlogCard';

const LeftSide = () => {
    const [postData,setPostData] = useState([]);
  

    useEffect(() => {
        fetch('../../../public/data/data.json')
        .then( (res) => res.json())
        .then((data) => setPostData(data))
    }, [])

 
    return (
        <Stack>
            {
               postData.map(post => (
                <BlogCard key={post.id} props={post} />
            ))
            }

        </Stack>
    );
};

export default LeftSide;