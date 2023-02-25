import {
  Box,
  Icon,
  ListIcon,
  ListItem,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import { ElementType } from 'react'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'

interface TravelTypeProps {
  icon: ElementType
  title: string
}

export const TravelType = ({ icon, title }: TravelTypeProps) => {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  })

  return isWideScreen ? (
    <ListItem flex={{ base: 'none', md: '1 1 158px' }}>
      <VStack spacing="6">
        <Icon as={icon} boxSize="auto" />
        <Text>{title}</Text>
      </VStack>
    </ListItem>
  ) : (
    <ListItem
      _even={{
        textAlign: 'right',
      }}
      _last={{
        textAlign: 'center',
      }}
      whiteSpace="nowrap"
      w="50%"
    >
      <ListIcon
        as={RiCheckboxBlankCircleFill}
        color="yellow.500"
        width="8px"
        mb="3px"
      />
      {title}
    </ListItem>
  )
}
