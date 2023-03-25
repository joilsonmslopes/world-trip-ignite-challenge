import { City, Flag } from '@/types'
import { Box, Card, CardBody, Flex, Icon, Image, Text } from '@chakra-ui/react'
import Flags from 'country-flag-icons/react/1x1'

interface ItemGaleryProps {
  city: City
  countryFlag: Flag
  countryName: string
}

export const ItemGalery = ({
  city,
  countryName,
  countryFlag,
}: ItemGaleryProps) => {
  const Flag = Flags[countryFlag]

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
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Text fontWeight={600} fontSize="xl" color="gray.700">
              {countryName}
            </Text>
            <Text fontWeight={500} fontSize="md" color="gray.300">
              {city.name}
            </Text>
          </Box>
          <Box px="2">
            <Icon
              as={Flag}
              title={countryName}
              width="30px"
              height="30px"
              borderRadius="full"
              objectFit="cover"
              mt="4"
            />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  )
}
