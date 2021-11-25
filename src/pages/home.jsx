import Header from '../components/header'
import { Link, Text, Image, Box, useColorModeValue } from '@chakra-ui/react'
import MyColors from '../colors'
import BoxSection from '../components/box_section'

const Home = () => {
  const heading_color = useColorModeValue(MyColors.light.bg0, MyColors.dark.fg)
  const text_color = useColorModeValue(MyColors.light.fg, MyColors.dark.fg)
  const link_color = useColorModeValue(MyColors.light.bg0, MyColors.dark.active)
  const link_active_color = useColorModeValue(MyColors.purple, MyColors.yellow)

  return (
    <>
      <Header />
      <BoxSection>
        <Text color={heading_color} as="strong" fontSize="1.4em">
          Hello my name is Gabriel!
        </Text>

        <Text color={text_color} align="justify">
          Even though my name is Gabriel, I should also mention that people
          usually call me &apos; yeyee &apos;. How did I ended up getting that
          name? When I was around 5 years old, I cannot properly pronounce my
          name, and at that time I was addicted to
          <Link
            color={link_color}
            children=" this song "
            href="https://www.youtube.com/watch?v=_0MBcxyTjus"
            target="blank"
            _hover={{ bg: null, color: link_active_color }}
            borderRadius="lg"
          />
          .
        </Text>
      </BoxSection>

      <BoxSection m={4}>
        <Text as="strong" color={heading_color} fontSize="1.4em">
          Brief Introduction
        </Text>

        <Text align="justify" color={text_color}>
          Currently, I&apos;m on my 4th year, Electrical Engineering degree, in
          <Link
            color={link_color}
            children=" Universitas Katolik Widya Mandala"
            href="https://ukwms.ac.id/"
            target="_blank"
            _hover={{ bg: null, color: link_active_color }}
            borderRadius="lg"
          />
          , with telecommunication as my main focus of study. In my study, I
          have gained a huge interest towards programming, and embedded systems
          design, and PCB design. I&apos;m a bit kind of introverted, but I will
          try to keep up with other people! *and also, I can play a bit of
          guitar & piano
        </Text>

        <Box
          mt={2}
          display="flex"
          justifyContent="space-evenly"
          alignContent="center"
        >
          <Image
            src="assets/WM_Kalijudan.jpg"
            borderRadius={{ base: 'full', md: 'lg' }}
            boxSize={{ base: '250px' }}
          />
        </Box>
        <Text
          as="strong"
          color={text_color}
          fontSize="1.2em"
          mt={3}
          display="flex"
          justifyContent="center"
        >
          My Campus
        </Text>
      </BoxSection>

      <BoxSection mb={4}>
        <Text as="strong" fontSize="1.4em" color={heading_color}>
          Favorites
        </Text>
        <Box p={4} color={text_color}>
          <ul>
            <li>Guitar (fingerstyle, metal, rock & shred) 🎸</li>
            <li>Piano 🎹</li>
            <li>Sugarless Coffee 🍵</li>
            <li>Dogs 🐕</li>
            <li>PCB design (≖ᴗ≖๑)</li>
            <li>Embedded Systems 🤖</li>
            <li>Linux 🐧</li>
          </ul>
        </Box>
      </BoxSection>
    </>
  )
}

export default Home
