import Footer from '../components/footer'
import Navbar from '../components/navbar'
import AnimatedSection from '../components/section'
import MyColors from '../colors'
import { Outlet } from 'react-router-dom'
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'

const Layout = () => {
  const { colorMode } = useColorMode()
  const bg0 = useColorModeValue(MyColors.light.bg0, MyColors.dark.bg0)
  const bg1 = useColorModeValue(MyColors.light.bg1, MyColors.dark.bg1)

  return (
    <Box bg={bg0} h="100%" minH="100vh">
      <Navbar />

      <AnimatedSection
        key={colorMode}
        delay={0.4}
        bg={bg1}
        height="100%"
        display="flex"
        flexGrow={1}
        flexDir="column"
        alignItems="center"
      >
        <Outlet />
      </AnimatedSection>
      <Footer />
    </Box>
  )
}

export default Layout
