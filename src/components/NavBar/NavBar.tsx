
import AppBar from '@mui/material/AppBar'

import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import Avatar from '../../assets/imgs/logo.png.jpg'

// Definimos tamanhos responsivos para o logo
const StyledImg = styled('img')(({ theme }) => ({
  height: '200px',           // padrão em telas maiores
  [theme.breakpoints.down('sm')]: {
    height: '300px',         // maior em telas pequenas
  },
  [theme.breakpoints.between('sm', 'md')]: {
    height: '250px',         // intermédiario em tablets
  },
}))

function ResponsiveAppBar() {
  return (
    <AppBar position="absolute" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          <Tooltip title="Open settings">
            <StyledImg src={Avatar} alt="Logo" />
          </Tooltip>
        </Toolbar>
          
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
