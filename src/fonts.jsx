import { Global } from '@emotion/react'

const Font = () => (
  <Global styles={
    `
      @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      #main{
        font-family: 'Balsamiq Sans', cursive;
        color: #cdcdcd;
      }
    `
  } />
)

export default Font
