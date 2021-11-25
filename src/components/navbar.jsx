/* NAVBAR
 * Navbar terdiri dari 2 mode, yaitu untuk view mobile & desktop
 * - Desktop: tampil di top, active = diberi bg terang
 * - Mobile: di hide di menu list (icon: hamburger)
 * */
import MyColors from '../colors'
import ThemeToggleButton from './theme-toggle-btn'
import { Link, useLocation } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Text,
  Box,
  HStack,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Link as ChakraLink,
  useColorModeValue
} from '@chakra-ui/react'

const LinkItem = ({ children, href, ...props }) => {
  // Theming
  const { link_active_bg, link_active_fg, link_inactive_fg } = props

  const is_active = useLocation().pathname === href
  const bg = is_active ? link_active_bg : 'none'
  const fg = is_active ? link_active_fg : link_inactive_fg

  return (
    <Box
      width="100%"
      bg={bg}
      color={fg}
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      borderRadius="lg"
      minH="40px"
    >
      <Link to={href}>
        <Text as="strong" fontSize="1.2em">
          {children}
        </Text>
      </Link>
    </Box>
  )
}

const Navbar = () => {
  const fg = useColorModeValue(MyColors.dark.fg, MyColors.dark.fg)
  const bg0 = useColorModeValue(MyColors.light.bg0, MyColors.dark.bg0)

  const link_active_bg = useColorModeValue(
    MyColors.yellow,
    MyColors.dark.active
  )
  const link_inactive_bg = useColorModeValue(
    MyColors.light.bg0,
    MyColors.dark.bg2
  )
  const link_active_fg = useColorModeValue(MyColors.light.fg, MyColors.dark.fg)
  const link_inactive_fg = useColorModeValue(
    MyColors.light.bg2,
    MyColors.dark.fg
  )

  return (
    <Box p={3} bg={bg0}>
      <Box
        pt={1}
        width="100%"
        display={{ base: 'none', md: 'flex' }}
        flexDir="row-reverse"
      >
        <HStack spacing="20px">
          <ThemeToggleButton />
          <LinkItem
            href="/"
            link_active_fg={link_active_fg}
            link_inactive_fg={link_inactive_fg}
            link_active_bg={link_active_bg}
            link_inactive_bg={link_inactive_bg}
          >
            Home
          </LinkItem>
          <LinkItem
            href="/works"
            link_active_fg={link_active_fg}
            link_inactive_fg={link_inactive_fg}
            link_active_bg={link_active_bg}
            link_inactive_bg={link_inactive_bg}
          >
            Works
          </LinkItem>
          <LinkItem
            href="/About"
            link_active_fg={link_active_fg}
            link_inactive_fg={link_inactive_fg}
            link_active_bg={link_active_bg}
            link_inactive_bg={link_inactive_bg}
          >
            About
          </LinkItem>
          <Box width="100%" p={1} textAlign="center">
            <ChakraLink
              href="https://github.com/yeyee2901/my-website"
              target="_blank"
              _hover={{ textDecoration: 'none' }}
            >
              <Text fontSize="1.2em" as="strong" color={link_inactive_fg}>
                Page Source
              </Text>
            </ChakraLink>
          </Box>
        </HStack>
      </Box>

      <Box
        p={2}
        width="100%"
        borderRadius="lg"
        display={{ base: 'flex', md: 'none' }}
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text as="strong" fontSize="1.8em" color={fg}>
          <Link to="/">Yeyee&apos;s Homepage</Link>
        </Text>

        <Box
          minW="100px"
          maxW="25vh"
          display="flex"
          justifyContent="space-evenly"
        >
          <ThemeToggleButton />
          <Menu autoSelect={false}>
            <MenuButton
              color="white"
              _hover={{
                bg: bg0,
                borderRadius: 'lg',
                color: fg
              }}
              _expanded={{
                borderRadius: 'lg',
                color: fg
              }}
              maxH="40px"
              minV="40px"
            >
              <HamburgerIcon boxSize={8} />
            </MenuButton>
            <MenuList bg={bg0} borderColor={fg} borderWidth="4px">
              <MenuItem _hover={{ bg: bg0 }}>
                <LinkItem
                  href="/"
                  link_active_fg={link_active_fg}
                  link_inactive_fg={link_inactive_fg}
                  link_active_bg={link_active_bg}
                  link_inactive_bg={link_inactive_bg}
                >
                  Home
                </LinkItem>
              </MenuItem>
              <MenuItem _hover={{ bg: bg0 }}>
                <LinkItem
                  href="/works"
                  link_active_fg={link_active_fg}
                  link_inactive_fg={link_inactive_fg}
                  link_active_bg={link_active_bg}
                  link_inactive_bg={link_inactive_bg}
                >
                  Works
                </LinkItem>
              </MenuItem>
              <MenuItem _hover={{ bg: bg0 }}>
                <LinkItem
                  href="/about"
                  link_active_fg={link_active_fg}
                  link_inactive_fg={link_inactive_fg}
                  link_active_bg={link_active_bg}
                  link_inactive_bg={link_inactive_bg}
                >
                  About
                </LinkItem>
              </MenuItem>
              <MenuItem _hover={{ bg: bg0 }}>
                <Box width="100%" p={1} textAlign="center">
                  <ChakraLink
                    href="https://github.com/yeyee2901/my-website"
                    target="_blank"
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Text fontSize="1.2em" as="strong" color={link_inactive_fg}>
                      Page Source
                    </Text>
                  </ChakraLink>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
