import { Box, Button, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import MyColors from '../colors'

const ThemeToggleButton = ({ children, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)
  const bg = useColorModeValue(MyColors.dark.bg0, MyColors.yellow)
  const fg = useColorModeValue(MyColors.dark.fg, MyColors.light.fg)

  return (
    <Button
      p={2}
      maxH="40px"
      maxW="40px"
      bg={bg}
      color={fg}
      onClick={toggleColorMode}
      {...props}
    _hover={{
      bg: MyColors.dark.bg2,
      color: MyColors.yellow
    }}
    >
      {icon}
    </Button>
  )
}

export default ThemeToggleButton
