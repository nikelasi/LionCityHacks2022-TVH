import { Box } from '@chakra-ui/react'
import Landing from './sections/Landing'
import Body from './sections/Body'

import bgImage from './assets/assemble.jpg'
import samPoder from './assets/wtf.jpg'

function App() {

  return (
    <Box
      id='app'
      width="100vw"
      minHeight="100vh">
      <Landing />
      <Box
        position="absolute"
        top="0" right="0" left="0" bottom="0"
        zIndex="-1"
        backgroundImage={samPoder}
        backgroundRepeat="repeat"
        // backgroundSize="cover"
         />
         <Body/>
    </Box>
  )
}

export default App