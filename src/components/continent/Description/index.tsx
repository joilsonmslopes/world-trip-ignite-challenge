import { Continent } from '@/services/continentService'
import { Flex, Stack, Text } from '@chakra-ui/react'
import { BasicInfo } from './BasicInfo'

interface DescriptionProps {
  continent: Continent
  mostVisitedCitiesInWorld: string[] | null
}

export const Description = ({
  continent,
  mostVisitedCitiesInWorld,
}: DescriptionProps) => {
  return (
    <Flex
      px={{ base: '4', md: '8.75rem' }}
      py={{ base: '6', md: '20' }}
      alignItems="center"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '4', md: '4.375rem' }}
      >
        <Text
          w={{ base: '100%', md: '50%' }}
          maxW={{ base: '100%', md: '600px' }}
          fontSize={{ base: 'sm', md: '2xl' }}
          textAlign="justify"
        >
          {continent?.description}
        </Text>
        <BasicInfo
          numberOfCountries={continent?.numberOfCountries}
          totalLanguages={continent?.totalLanguages}
          mostVisitedCitiesInWorld={mostVisitedCitiesInWorld}
        />
      </Stack>
    </Flex>
  )
}
