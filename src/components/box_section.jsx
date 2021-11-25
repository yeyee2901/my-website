import { Box, useColorModeValue } from '@chakra-ui/react'
import MyColors from '../colors'

const BoxSection = ({ children, ...props }) => {
  const bg = useColorModeValue(MyColors.light.bg2, MyColors.dark.bg2)
  return (
    <Box p={4} bg={bg} borderRadius="lg" w="80%" {...props} mt={4}>
      {children}
    </Box>
  )
}

export default BoxSection
