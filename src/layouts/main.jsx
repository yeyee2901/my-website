import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Section from '../components/section'
import MyColor from '../colors'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Layout = () => (
  <Box
    bg={MyColor.dark}
    h="100%"
    minH="100vh"
  >
    <Navbar />
    <Header />

    <Section
      delay={0.2}
      bg={MyColor.dark}
      height="100%"
      display="flex"
      flexGrow={1}
      flexDir="column"
      alignItems="center"
    >
      <Outlet />
      <Footer />
    </Section>
  </Box>
)
export default Layout
