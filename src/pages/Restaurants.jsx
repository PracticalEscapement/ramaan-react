import { useContext, useEffect } from 'react'
import RamaanContext from '../context/RamaanContext'
import { getRestaurants } from '../context/RamaanActions'
import { Box, VStack, StackDivider } from '@chakra-ui/react'
import titleize from 'titleize'

function Restaurants() {
  const {restaurants, dispatch} = useContext(RamaanContext)

  useEffect(() => {
    const getRestaurantsArray = async() => {
      const restaurantsArray = await getRestaurants()
      dispatch({type: 'GET_RESTAURANTS', payload: restaurantsArray})
    }
    getRestaurantsArray()

  }, [dispatch])
  
  return (
    <>
      <VStack
        alignItems='center'
        mt={5}
        spacing={4}
        align='stretch'
      >
        {restaurants.map((restaurant) => (
          <Box maxW='md' borderWidth='1px' borderRadius='lg' p={7}>
            {titleize(restaurant.name)}
          </Box>
        ))}

      </VStack>
    </>
  )
}

export default Restaurants