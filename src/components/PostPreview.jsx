import { Link } from 'react-router-dom'
import titleize from 'titleize'
import {
  Box, 
  Heading, 
  Text, 
  Image, 
  Grid, 
  GridItem } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

function PostPreview({ post: {id, title, image_url, review, restaurant} }) {
  const {name, rating, price} = restaurant

  //function to determine how many stars need to be rendered for each post preview

  
  
  return (
    <Box
      bg='white'
      p={5}
      mb={5}
      shadow='2xl'
      borderWidth='2px'
      flex='1'
      borderRadius='md'
    >
      <Grid
        h='200px'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={1}
      >
        <GridItem rowSpan={3} colSpan={1}>
          <Image
            p='0.5' 
            rounded='md'
            boxShadow='dark-lg'
            boxSize='200px'
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            />
        </GridItem>
        <GridItem colSpan={2}>
        <Grid
          h='50px'
          templateColumns='repeat(3, 1fr)'
          gap={1}
        >
          <GridItem colSpan={1}>
              <Heading fontSize='2xl'>{`${titleize(name)}`}</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <Link to={`/post/${id}`}>
              <Heading fontSize='3xl'>{`"${titleize(title)}"`}</Heading>
            </Link>
          </GridItem>
        </Grid>
        </GridItem>
        <GridItem colSpan={2} mt={7}>
          <Text style={{ textIndent: 20 }} mt={4} noOfLines={[1, 2, 3]}>{`${review}`}</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}



export default PostPreview