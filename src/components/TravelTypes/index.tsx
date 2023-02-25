import {
  Box,
  Flex,
  HStack,
  ListIcon,
  ListItem,
  SimpleGrid,
  UnorderedList,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import { TravelType } from './TravelType'
import { v4 as uuidv4 } from 'uuid'

import cocktailIcon from 'public/cocktail.svg'
import earthIcon from 'public/earth.svg'
import buildingIcon from 'public/building.svg'
import museumIcon from 'public/museum.svg'
import surfIcon from 'public/surf.svg'
import { ElementType } from 'react'

interface TravelItem {
  id: string
  icon: ElementType
  title: string
}

const travelItems: TravelItem[] = [
  {
    id: uuidv4(),
    icon: cocktailIcon,
    title: 'Vida noturna',
  },
  {
    id: uuidv4(),
    icon: surfIcon,
    title: 'Praia',
  },
  {
    id: uuidv4(),
    icon: buildingIcon,
    title: 'Moderno',
  },
  {
    id: uuidv4(),
    icon: museumIcon,
    title: 'Clássico',
  },
  {
    id: uuidv4(),
    icon: earthIcon,
    title: 'E mais...',
  },
]

export const TravelTypes = () => {
  return (
    <Box
      py={{ base: '2.25rem', lg: '20' }}
      px={{ base: '3.125rem', lg: '8.75rem' }}
    >
      <UnorderedList
        display="flex"
        justifyContent={{ base: 'center', md: 'space-between' }}
        flexWrap="wrap"
        w="100%"
        maxW={{ base: 275, md: '100%' }}
        mx="auto"
        listStyleType="none"
      >
        {travelItems.map(item => (
          <TravelType key={item.id} icon={item.icon} title={item.title} />
        ))}
      </UnorderedList>
    </Box>
  )
}
