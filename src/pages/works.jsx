import StyledHeading from '../components/styled_heading'
import BoxSection from '../components/box_section'
import MyColors from '../colors'
import { Text, Box, Image, Link } from '@chakra-ui/react'

const WorkBox = ({ children, title, link, ...props }) => {

  return (
    <BoxSection mb={5} {...props} align="center" p={2} pt={4}>
      <StyledHeading bg={MyColors.semi_dark} fontSize="1.2em" w="90%">
        <Link href={link} target="_blank" >
          {title}
        </Link>
      </StyledHeading>
      {children}

      <Box pt={3}>
        <Text as="strong" fontSize="1em" color={MyColors.active}>
          <Link href={link} target="_blank">
            {link}
          </Link>
        </Text>
      </Box>
    </BoxSection>
  )
}

const Works = () => {
  return (
    <WorkBox title="Multi Serial Logger" link="https://github.com/yeyee2901/multithread-serial-logger">
      <Box mb={2} mt={2} maxW="90%">
        <Image src="https://user-images.githubusercontent.com/55247343/127276557-de432ac8-ca9d-41ce-8881-cacc9a2cee6b.png" />
      </Box>
      <Text as="p" maxW="90%">
        Simple application for embedded systems data logging via UART serial communication,
        built using Python, and PyQt5 as the GUI.
        <br/>
          Able to log multiple device without affecting each other logging process by splitting
          each logging task using multithreading.
      </Text>
    </WorkBox>
  )
}

export default Works
