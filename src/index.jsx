import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Theme from './theme'

// render on main element
const Website = (
  <>
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </>
)

const root = document.getElementById('main')
ReactDOM.render(Website, root)
