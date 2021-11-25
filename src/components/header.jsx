import { Box, Image, VStack, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import MyColors from '../colors'

const Header = () => {
  const bg = useColorModeValue(MyColors.light.bg0, MyColors.dark.bg1)

  return (
    <Box
      pb={3}
      width="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
      bg={bg}
    >
      <VStack>
        <Box display={{ base: 'none', md: 'block' }} m={2}>
          <Text
            as="strong"
            color={useColorModeValue(MyColors.dark.fg, MyColors.dark.fg)}
            fontSize="2em"
          >
            <Link to="/">Yeyee&apos;s Homepage</Link>
          </Text>
        </Box>
        <Box
          borderWidth="thick"
          borderRadius="full"
          borderColor={useColorModeValue(MyColors.yellow, MyColors.dark.active)}
        >
          <Image
            src="assets/profile.png"
            alt="Profile"
            boxSize="200px"
            borderRadius="full"
          />
        </Box>

        <Text
          as="strong"
          color="white"
          bgGradient={`linear(to-r, ${useColorModeValue(
            MyColors.yellow,
            'blue.600'
          )}, ${useColorModeValue(MyColors.light.bg3, 'blue.200')})`}
          bgClip="text"
          align="center"
          fontSize={{ md: '2.2em', base: '1.6em' }}
        >
          Gabriel Sebastian Hidayat
        </Text>

        <Box
          borderRadius="lg"
          p={2}
          bg={useColorModeValue(MyColors.light.bg0, MyColors.dark.bg2)}
          color={useColorModeValue(MyColors.dark.fg, MyColors.dark.fg)}
        >
          <Text as="strong" fontSize="1.1em">
            Empowering myself with a cup of coffee
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default Header
