import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React, { useState } from 'react';

const BlogCard = ({props}) => {
    const {postImg,authorImg,authName,authPablishDate,postHeading,postTag,postReadingTime} = props;
      //Bookmark blog count
      // const [blogCount, setBlogCount ] = useState(0);
      //end

    const handleTotalBookmarkBlog = (blog) => {
        console.log('bookmark blog: ', blog);
    }
    return (
     <Box pb={5}>
      <Card>
         <CardMedia sx={{objectFit: 'cover'}}
        component="img"
        height="450"
        image={postImg}
        alt="Paella dish"
      />
      <CardContent >
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} py={2} >
            {/* Author  */}
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Avatar alt="Travis Howard" src={authorImg} />
            <Stack direction={'column'}>
                <Typography variant="button" >{authName}</Typography>
                <Typography variant='caption'>{authPablishDate}</Typography>
            </Stack>

            </Stack>
            {/* end Author  */}
            <Stack direction={'row'} alignItems={'center'}>
            <Typography variant='overline'>{postReadingTime}</Typography>
            <IconButton color="secondary" aria-label="add an alarm"  onClick={() => handleTotalBookmarkBlog(props.blog)}>
  <BookmarkBorderIcon />
</IconButton>
            </Stack>
           

        </Stack>
        {/* end  */}
        <Typography variant='h4' pb={1}>{postHeading}</Typography>
        <Typography variant='caption'>{postTag}</Typography>

      </CardContent>

      <CardActions sx={{pb: 4,px:2}}>
      <Button size="small" >Mark as read</Button>
      </CardActions>
     </Card>
     </Box>
    );
};

export default BlogCard;