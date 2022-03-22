import { useContext, useEffect } from 'react'
import RamaanContext from '../context/RamaanContext'
import { getRestaurants } from '../context/RamaanActions'
import { Box, VStack } from '@chakra-ui/react'
import RestaurantCard from '../components/RestaurantCard'

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
          <RestaurantCard name={restaurant.name} />
        ))}
      </VStack>
    </>
  )
}

export default Restaurants