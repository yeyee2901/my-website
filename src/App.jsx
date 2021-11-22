import Font from './fonts'
import Layout from './layouts/main'
import Home from './pages/home'
import About from './pages/about'
import Works from './pages/works'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

const Main = () => {
  const location = useLocation()

  // to check if route is changed
  // this will avoid visual bug that I encounter
  // during page transition
  const on_page_change = () => {
    scroll(0, 0)
  }
  useEffect(on_page_change, [location.pathname])

  return (
    <>
      <Font />
      <TransitionGroup>
        <CSSTransition
          timeout={250}
          classNames="fade"
          key={location.key}
        >
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="works" element={<Works />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default Main;
