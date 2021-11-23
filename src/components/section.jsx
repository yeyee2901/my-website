import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// create custom component with forwarded transition property
const Section = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const AnimatedSection = ({ children, delay = 0, ...props }) => {
  return (
    <Section
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: delay }}
      {...props}
    >
      {children}
    </Section>
  )
}

export default AnimatedSection
