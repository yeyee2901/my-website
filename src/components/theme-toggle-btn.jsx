import { Button, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import MyColors from '../colors'
import { motion, AnimatePresence } from 'framer-motion'

const ThemeToggleButton = ({ children, ...props }) => {
  const { toggleColorMode } = useColorMode()

  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)
  const bg = useColorModeValue(MyColors.purple, MyColors.yellow)
  const fg = useColorModeValue(MyColors.dark.fg, MyColors.light.fg)

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={useColorModeValue('light', 'dark')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ scale: 300, opacity: 0 }}
        transition={{ delay: 0, duration: 1 }}
      >
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
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
