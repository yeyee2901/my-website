import { Link, Text, Image, Box } from '@chakra-ui/react'
import StyledHeading from '../components/styled_heading'
import MyColor from '../colors'
import BoxSection from '../components/box_section'

const Home = () => {
  return (
    <>
      <BoxSection>
        <StyledHeading align="left" fontSize="2em" bg={MyColor.semi_dark}>
          Hello my name is Gabriel!
        </StyledHeading>

        <Text align="justify">
          Even though my name is Gabriel, I should also mention that people
          usually call me &apos; yeyee &apos;. How did I ended up getting that name?
          When I was around 5 years old, I cannot properly pronounce my name,
          and at that time I was addicted to
          <Link
            color={MyColor.active}
            children=" this song "
            href='https://www.youtube.com/watch?v=_0MBcxyTjus'
            target="blank"
            _hover={{ bg: MyColor.active, color: "black" }}
            borderRadius="lg"
          />
          .
        </Text>
      </BoxSection>

      <BoxSection m={4}>
        <StyledHeading align="left" fontSize="2em" bg={MyColor.semi_dark}>
          Brief Introduction
        </StyledHeading>

        <Text align="justify">
          Currently, I&apos;m on my 4th year, Electrical Engineering degree, in
          <Link
            color={MyColor.active}
            children=" Universitas Katolik Widya Mandala"
            href='https://ukwms.ac.id/'
            target="_blank"
            _hover={{ bg: MyColor.active, color: "black" }}
            borderRadius="lg"
          />, with telecommunication as my main focus of study.
          In my study, I have gained a huge interest towards programming, and embedded
          systems. I&apos;m also confident in my skills in playing guitar & piano.
        </Text>

        <Box
          mt={2}
          display="flex"
          justifyContent="space-evenly"
        >
          <Image
            src="assets/WM_Kalijudan.jpg"
            borderRadius={{ base: "full", md: "lg" }}
            boxSize={{ base: "250px" }}
          />
        </Box>
        <StyledHeading fontSize="1.2em" bg={MyColor.semi_dark}>
          My Campus
        </StyledHeading>

        <Box p={4}>
          <ul>
            <li>Guitar player since 14 yo</li>
            <li>Piano player since 9 yo</li>
            <li>C, Python, PHP, Javascript, Linux</li>
          </ul>
        </Box>
      </BoxSection>

    </>
  )
}

export default Home
