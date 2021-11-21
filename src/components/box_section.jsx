import { Box } from '@chakra-ui/react'
import MyColor from '../colors'

const BoxSection = ({ children, ...props }) => (
  <Box
    p={4}
    bg={MyColor.semi_dark}
    borderRadius="lg"
    w="80%"
    {...props}
  >
    {children}
  </Box>
)

export default BoxSection
