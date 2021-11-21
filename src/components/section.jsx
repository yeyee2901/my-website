import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// create custom component with forwarded transition property
const AnimatedSection = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === "transition"
  }
})

const Section = ({ children, delay = 0, ...props }) => {
  return (
    <AnimatedSection
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: delay }}
      {...props}
    >
      {children}
    </AnimatedSection>
  )
}

export default Section
