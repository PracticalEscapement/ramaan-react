import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import titleize from 'titleize';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function ProductSimple({ name }) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'700px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-10}
          pos={'relative'}
          height={'400px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(20px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(35px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={400}
            width={700}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack mt={8} align='center'>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {titleize(name)}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}