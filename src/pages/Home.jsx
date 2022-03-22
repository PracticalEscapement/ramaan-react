import { useEffect, useContext } from 'react'
import CurrentUserContext from '../context/user/currentUserContext'
import { Link, useNavigate } from 'react-router-dom'
import ichirakuRamen from '../assets/ichirakuRamen.gif'
import {
  Box,
  Center,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';


function Home() {
  const { currentUser, isSignedIn } = useContext(CurrentUserContext)
  const {email, first_name, last_name, is_admin} = currentUser

  return (
    <>
      <div>
        {isSignedIn && (<h1>Welcome Back {first_name}!</h1>)}
        {!isSignedIn && (<h1>Welcome!</h1>)}
    </div>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 50 }}>
          <Center>
            <Box maxW='xl' boxShadow='dark-lg' p='1' rounded='md' bg='white'>
              <img src={ichirakuRamen} alt='Loading...'/>
            </Box>
          </Center>
          <Text color={'gray.600'} fontSize='xl'>
            Ever finished an episode of Naruto and craved a piping hot bowl of ramen? We've been there,
             so Ramen Finder was created to help satisfy those ramen cravings.
              We'll help you find the best ramen restaurants in New York.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'red.600'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'blue.900',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default Home
