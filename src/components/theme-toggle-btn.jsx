import { Button, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import MyColors from '../colors'

const ThemeToggleButton = ({ children, ...props }) => {
  const { toggleColorMode } = useColorMode()

  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)
  const bg = useColorModeValue(MyColors.purple, MyColors.yellow)
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
