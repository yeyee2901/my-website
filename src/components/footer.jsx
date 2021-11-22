import { Box, Container, Text } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons'
import MyColor from '../colors'
import StyledHeading from './styled_heading'

const Footer = ({ ...props }) => {
  return (
    <Box
      {...props}
      bg={MyColor.very_dark}
      w="100%"
      h="100%"
      p={3}
      display="flex"
      flexDir="column"
      justifyContent="space-around"
    >
      <StyledHeading fontSize="2em" align="center" bg={MyColor.very_dark}>
        Find me on:
      </StyledHeading>

      <Container
        display="flex"
        flexDir="row"
        justifyContent="space-evenly"
        p={2}
      >
        <SocialIcon
          url="https://github.com/yeyee2901"
          network="github"
          bgColor="white"
          target="_blank"
        />

        <SocialIcon
          url="https://instagram.com/yeyee2901"
          network="instagram"
          bgColor="white"
          target="_blank"
        />

        <SocialIcon
          url="https://id.linkedin.com/in/gabriel-sebastian-hidayat-b7138a210"
          network="linkedin"
          bgColor="white"
          target="_blank"
        />

        <SocialIcon
          url="https://www.youtube.com/channel/UCrdZkuwgLivjnvlNvWJtQEA"
          network="youtube"
          bgColor="white"
          target="_blank"
        />

      </Container>

      <Text as="p" align="center" mt={5}>
        Copyright &copy; 2021 @ yeyee2901
      </Text>
    </Box>
  )
}

export default Footer


