import StyledHeading from '../components/styled_heading'
import { Box, Image, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import MyColors from '../colors'

const Header = () => (
  <Box
    pb={3}
    width="100%"
    display="flex"
    flexDir="column"
    alignItems="center"
    bg="gray.800"
  >
    <VStack>
      <Box
        display={{ base: "none", md: "block" }}
      >
        <StyledHeading fontSize="2.3em">
          <Link to="/">
            Yeyee&apos;s Homepage
          </Link>
        </StyledHeading>
      </Box>
      <Box
        borderWidth="thick"
        borderRadius="full"
        borderColor={MyColors.active}
      >
        <Image
          src="assets/profile.png"
          alt="Profile"
          boxSize="200px"
          borderRadius="full"
        />
      </Box>

      <Text as="strong" fontSize="2.2em" color="white"
        bgGradient="linear(to-r, blue.500, teal.200)"
        bgClip="text"
      >
        Gabriel Sebastian Hidayat
      </Text>

      <Box
        borderRadius="lg"
        p={2}
        bg="gray.700"
        color="white"
      >
        <strong>
          Empowering myself with a cup of coffee
        </strong>
      </Box>

    </VStack>
  </Box>
)

export default Header
