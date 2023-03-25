import { Country } from '@/services/continentService'
import { Flex, Grid, Text } from '@chakra-ui/react'
import { ItemGalery } from './ItemGalery'

interface CityGaleryProps {
  countries: Country[]
}

export const CitiesGalery = ({ countries }: CityGaleryProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      px={{ base: 4, md: '8.75rem' }}
      pb={{ base: 4, md: 10 }}
    >
      <Text
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight={500}
        mb={{ base: 5, md: 10 }}
        textAlign="left"
        width="100%"
      >
        Cidades 100+
      </Text>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={6}
      >
        {countries?.map(country => {
          return country.cities?.map(city => (
            <ItemGalery
              key={city.id}
              city={city}
              countryFlag={country.flag}
              countryName={country.name}
            />
          ))
        })}
      </Grid>
    </Flex>
  )
}
