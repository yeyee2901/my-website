import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons'
import MyColors from '../colors'

const Footer = ({ ...props }) => {
  const bg = useColorModeValue(MyColors.light.bg0, MyColors.dark.bg0)
  const fg = useColorModeValue(MyColors.dark.fg, MyColors.dark.fg)
  const heading_color = useColorModeValue(MyColors.dark.fg, MyColors.dark.fg)

  return (
    <Box
      {...props}
      bg={bg}
      w="100%"
      h="100%"
      p={3}
      display="flex"
      flexDir="column"
      justifyContent="space-around"
    >
      <Text
        as="strong"
        display="flex"
        justifyContent="center"
        fontSize="1.6em"
        color={heading_color}
        mb={3}
      >
        Find me on:
      </Text>

      <Container
        display="flex"
        flexDir="row"
        justifyContent="space-evenly"
        p={2}
      >
        <SocialIcon
          url="https://github.com/yeyee2901"
          network="github"
          target="_blank"
          bgColor="white"
        />

        <SocialIcon
          url="https://instagram.com/yeyee2901"
          network="instagram"
          target="_blank"
          bgColor="white"
        />

        <SocialIcon
          url="https://id.linkedin.com/in/gabriel-sebastian-hidayat-b7138a210"
          network="linkedin"
          target="_blank"
          bgColor="white"
        />

        <SocialIcon
          url="https://www.youtube.com/channel/UCrdZkuwgLivjnvlNvWJtQEA"
          network="youtube"
          target="_blank"
          bgColor="white"
        />
      </Container>

      <Text as="p" align="center" mt={5} color={fg}>
        Copyright &copy; 2021 @ yeyee2901
      </Text>
    </Box>
  )
}

export default Footer
