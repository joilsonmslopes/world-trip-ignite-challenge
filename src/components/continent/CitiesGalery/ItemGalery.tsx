import { City } from '@/services/continentService'
import { Box, Card, CardBody, Flex, Image, Text } from '@chakra-ui/react'

interface ItemGaleryProps {
  city: City
  countryFlag: string
  countryName: string
}

export const ItemGalery = ({
  city,
  countryName,
  countryFlag,
}: ItemGaleryProps) => {
  city.name

  return (
    <Card maxW="sm" borderRadius="base">
      <Image
        src={city.imageUrl}
        alt={city.name}
        width="100%"
        height="173px"
        borderRadius="0.25rem 0.25rem 0 0"
        objectFit="cover"
      />
      <CardBody>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontWeight={600} fontSize="xl" color="gray.700">
              {countryName}
            </Text>
            <Text fontWeight={500} fontSize="md" color="gray.300">
              {city.name}
            </Text>
          </Box>
          <Image
            src={countryFlag}
            alt={countryName}
            borderRadius="full"
            width="30px"
            height="30px"
            objectFit="cover"
          />
        </Flex>
      </CardBody>
    </Card>
  )
}
