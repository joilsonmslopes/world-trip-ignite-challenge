import { ListItem, UnorderedList } from '@chakra-ui/react'

interface TooltipLabelProps {
  mostVisitedCitiesInWorld: string[]
}

export const TooltipLabel = ({
  mostVisitedCitiesInWorld,
}: TooltipLabelProps) => (
  <UnorderedList listStyleType="none">
    {mostVisitedCitiesInWorld?.map(city => (
      <ListItem key={city} fontSize="sm">
        {city}
      </ListItem>
    ))}
  </UnorderedList>
)
