import { Box, Text } from '@chakra-ui/react'
import MyColors from '../colors'

const StyledHeading = ({
  children,
  align = 'center',
  borderRadius = 'lg',
  bg = MyColors.dark,
  p = 2,
  ...props
}) => {
  return (
    <Box align={align} borderRadius={borderRadius} bg={bg} p={p} {...props}>
      <Text as="strong" color="white">
        {children}
      </Text>
    </Box>
  )
}

export default StyledHeading
