import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react'
import MyColors from '../colors'
import BoxSection from '../components/box_section'

const About = () => {
  const heading_color = useColorModeValue(MyColors.light.bg0, MyColors.dark.fg)
  const text_color = useColorModeValue(MyColors.light.fg, MyColors.dark.fg)
  const link_color = useColorModeValue(MyColors.light.bg0, MyColors.dark.active)
  const active_link_color = useColorModeValue(MyColors.purple, MyColors.yellow)

  return (
    <>
      <BoxSection mb={4}>
        <Text as="strong" color={heading_color} fontSize="1.4em">
          Gabriel is..
        </Text>
        <Text as="p" color={text_color}>
          currently a student at
          <Link
            color={link_color}
            children=" Universitas Katolik Widya Mandala"
            href="https://ukwms.ac.id/"
            target="_blank"
            _hover={{ bg: null, color: active_link_color }}
            borderRadius="lg"
          />
          , with telecommunication as his main focus of study. He was born on
          29th January, 2000, in Surabaya, Indonesia. His interest in
          technologies had sparked since he was in kindergarten life, where he
          will spend most of his times after school in front of his Pentium 4
          computer.
          <br />
          <br />
          During his early teenage years, he dedicated himself to study musics,
          especially in playing classical Piano and Electric Guitar. Because of
          that, sometimes he occassionally does a job related to music from time
          to time. And until now, Gabriel is still active in music world.
          <br />
          <br />
          At some point in his 18 years of life, his interest for technologies
          grew more, thus, he decided to pursue the Electrical Engineering
          degree, because he likes the hardware part of computers and how
          computer programs interact with the user and the hardware, basically
          understanding how computers do things. Also, he has a huge interest in
          Machine Learning and he thinks it's beneficial for tech-geeks like us
          to understand it since it will be beneficial regardless of what your
          field of expertise in technology is.
          <br />
          <br />
          Currently, Gabriel is focusing on his last year of college, while also
          simultaneously helping in Electrical Instrumentation Laboratory as an
          assistant.
        </Text>
      </BoxSection>

      <BoxSection mb={4}>
        <Text as="strong" color={heading_color} fontSize="1.4em">
          Technologies
        </Text>
        <Box p={3} color={text_color}>
          <ul>
            <li>Linux</li>
            <li>PCB Design</li>
            <li>Git</li>
            <li>C / C++ for embedded systems</li>
            <li>Python</li>
            <li>R for data analysis</li>
            <li>Javascript</li>
            <li>HTML, CSS</li>
            <li>PHP</li>
            <li>React JS</li>
            <li>Rust (currently learning)</li>
          </ul>
        </Box>

        <Text as="strong" color={heading_color} fontSize="1.4em">
          Embedded System Technologies
        </Text>
        <Box color={text_color} p={3}>
          <ul>
            <li>AVR Microcontrollers</li>
            <li>Arduino Family</li>
          </ul>
        </Box>
      </BoxSection>

      <BoxSection mb={4}>
        <Text as="strong" color={heading_color} fontSize="1.4em">
          About this page
        </Text>

        <Text color={text_color} as="p">
          This page is made possible using:
        </Text>
        <Box p={2} color={text_color}>
          <ul>
            <li>
              <Link
                href="https://reactjs.org"
                color={link_color}
                children="React JS "
                target="_blank"
              />
              - A Javascript framework which emphasizes component reusability
            </li>
            <li>
              <Link
                href="https://chakra-ui.com/"
                color={link_color}
                children="Chakra UI "
                target="_blank"
              />
              - A component library built upon React JS for easier site creation
            </li>
            <li>
              <Link
                href="https://reactrouter.com/"
                color={link_color}
                children="React Router "
                target="_blank"
              />
              - For client side routing
            </li>
            <li>
              <Link
                href="https://www.netlify.com/"
                color={link_color}
                children="Netlify "
                target="_blank"
              />
              - A web deployment platform that supports many popular frameworks
              such as React, Vue, etc.
            </li>
          </ul>
        </Box>
      </BoxSection>
    </>
  )
}

export default About
