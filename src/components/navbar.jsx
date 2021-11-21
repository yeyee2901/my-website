/* NAVBAR
  * Navbar terdiri dari 2 mode, yaitu untuk view mobile & desktop
  * - Desktop: tampil di top, active = diberi bg kuning
  * - Mobile: di hide di menu list (icon: hamburger)
  * */
import StyledHeading from '../components/styled_heading'
import MyColors from '../colors'
import { Link, useLocation } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  HStack,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Link as ChakraLink
} from '@chakra-ui/react'


const LinkItem = ({ children, href }) => {
  const is_active = useLocation().pathname === href
  const active_bg = is_active ? MyColors.active : MyColors.dark
  const active_color = is_active ? "black" : "white"

  return (
    <Box width="100%">
      <Link to={href}>
        <StyledHeading
          size="m"
          color={active_color}
          bg={active_bg}
          borderRadius="lg"
          p={2}
          align="center"
        >
          {children}
        </StyledHeading>
      </Link>
    </Box>
  )

}


const Navbar = () => {

  return (
    <Box p={3} bg={MyColors.dark}>
      <Box
        pt={1}
        width="100%"
        display={{ base: 'none', md: 'flex' }}
        flexDir={{ base: 'row', md: 'column' }}
        alignItems="end"
      >
        <HStack>
          <LinkItem href="/">
            Home
          </LinkItem>
          <LinkItem href="/works">
            Works
          </LinkItem>
          <LinkItem href="/About">
            About
          </LinkItem>
          <Box width="100%">
            <ChakraLink
              href="https://github.com/yeyee2901/my-website"
              target="_blank"
              _hover={{ textDecoration: "none" }}
            >
              <StyledHeading
                size="m"
                color="white"
                bg={MyColors.dark}
                p={2}
                align="center"
              >
                Page Source
              </StyledHeading>
            </ChakraLink>
          </Box>
        </HStack>
      </Box>

      <Box
        width='100%'
        display={{ base: 'flex', md: 'none' }}
        flexDir={{ base: 'column', md: 'row' }}
        alignItems='end'
      >
        <Menu autoSelect={false}>
          <MenuButton
            color="white"
            _hover={{
              bg: MyColors.secondary,
              borderRadius: "lg"
            }}
            _expanded={{
              borderRadius: "lg",
              color: MyColors.active
            }}
          >
            <HamburgerIcon boxSize={8} />
          </MenuButton>
          <MenuList
            bg={MyColors.dark}
            borderColor={MyColors.active}
            borderWidth="4px"
          >
            <MenuItem _hover={{ bg: MyColors.dark }}>
              <LinkItem href="/">
                Home
              </LinkItem>
            </MenuItem>
            <MenuItem _hover={{ bg: MyColors.dark }}>
              <LinkItem href="/works">
                Works
              </LinkItem>
            </MenuItem>
            <MenuItem _hover={{ bg: MyColors.dark }}>
              <LinkItem href="/about">
                About
              </LinkItem>
            </MenuItem>
            <MenuItem _hover={{ bg: MyColors.dark }}>
              <Box width="100%">
                <ChakraLink
                  href="https://github.com/yeyee2901/my-website"
                  target="_blank"
                  _hover={{ textDecoration: "none" }}>
                  <StyledHeading
                    as="h4"
                    size="m"
                    color="white"
                    bg={MyColors.dark}
                    borderRadius="lg"
                    p={2}
                    align="center"
                  >
                    Page Source
                  </StyledHeading>
                </ChakraLink>
              </Box>

            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box >
  )
}

export default Navbar
