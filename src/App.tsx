
import { Box } from '@mui/material'
import theme from './theme'
import ResponsiveAppBar from './components/NavBar/NavBar'
import Hero from './pages/Home/sections/Hero/Hero'

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={theme.mixins.toolbar} />
      <Hero />
    </>
  )
}
export default App