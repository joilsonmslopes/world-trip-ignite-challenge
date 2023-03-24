import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  Tooltip,
  Icon,
} from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'
import { TooltipLabel } from './TooltipLabel'

interface BasicInfoProps {
  numberOfCountries: number
  totalLanguages: number
  mostVisitedCitiesInWorld: string[] | null
}

export const BasicInfo = ({
  numberOfCountries: numbersOfCountries,
  totalLanguages,
  mostVisitedCitiesInWorld,
}: BasicInfoProps) => {
  const quantities = [
    {
      total: numbersOfCountries,
      title: 'países',
    },
    {
      total: totalLanguages,
      title: 'línguas',
    },
    {
      total: mostVisitedCitiesInWorld?.length,
      title: 'cidades 100+',
    },
  ]

  return (
    <Flex>
      <HStack spacing="2.265rem">
        {quantities.map((quantity, index) => (
          <Box key={`${quantity.total}-${quantity.title}__${index}`}>
            <Text
              fontWeight={600}
              fontSize={{ base: '2xl', md: '5xl' }}
              color="yellow.500"
            >
              {quantity.total}
            </Text>
            <Text
              fontWeight={{ base: 400, md: 600 }}
              fontSize={{ base: 'lg', md: '2xl' }}
            >
              {quantity.title}
              {quantity.title === 'cidades 100+' && (
                <Tooltip
                  label={
                    <TooltipLabel
                      mostVisitedCitiesInWorld={
                        mostVisitedCitiesInWorld as string[]
                      }
                    />
                  }
                  placement="right-start"
                  fontSize="sm"
                >
                  <Button variant="unstyled" w="4" h="4" minW="4" minH="4">
                    <Icon
                      as={FiInfo}
                      fontSize="sm"
                      ml="2"
                      mb="1"
                      color="gray.300"
                    />
                  </Button>
                </Tooltip>
              )}
            </Text>
          </Box>
        ))}
      </HStack>
    </Flex>
  )
}
