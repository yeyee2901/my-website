import Font from './fonts'
import Layout from './layouts/main'
import Home from './pages/home'
import About from './pages/about'
import Works from './pages/works'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Main = () => {
  const current_location = useLocation()

  return (
    <>
      <Font />
      <TransitionGroup>
        <CSSTransition
          timeout={250}
          classNames="fade"
          key={current_location.key}
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
