import { 
  VStack, 
  Box, 
  Image, 
  Heading,
  Text,
  Flex,
  Avatar,
  Divider,
} from '@chakra-ui/react'


function CommentObject({ comment }) {
  return (
    <Flex mb={'5'}>
      <Avatar />
        <Box>
          <Text ml={'5'}>{comment.user}</Text>
          <Text ml={'5'}>{comment.text}</Text>
        </Box>
    </Flex>
  )
}

export default CommentObject