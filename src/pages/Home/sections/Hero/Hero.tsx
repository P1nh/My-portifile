import { Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/imgs/rosto.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    background: "white",
    height: "100vh",
    display: "flex",
    alignItems: "center",

  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",

  }))

  return (
    <>
      <StyledHero>

        <Container 
            disableGutters
            maxWidth="xl"
            sx={{
              mx: {
                xs: 'auto',  // centralizado em telas pequenas
                md: 2,       // pequena margem nos lados (theme.spacing(2) = 16px)
                xl: 'auto',  // centralizado em telas extragrandes
              },
              px: {
                xs: 2,       // padding lateral em telas pequenas
                md: 5,       // sem padding, pois a margem já cuida disso
              },
              pt: 5,
            }}
          >
        
          <Grid container spacing={5} paddingTop="20px">
            <Grid display="flex-start" size={{ xs: 12, md: 8 }}>
              <Typography fontWeight="" variant="h2" color="secondary">Arthur Pinheiro</Typography>
              <Typography lineHeight="1" variant="h1" color="primary">Website and user interface designer</Typography>
              <Grid gap={2} container width="10" spacing={4}>
                <Grid size={{ xs: 12, md: 3 }} display="flex" marginTop="10px">

                  <StyledButton >
                    <DownloadIcon />

                    <Typography>Dowload CV</Typography>

                  </StyledButton>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }} display="flex" marginTop="10px" >
                  <StyledButton>
                    <ConnectWithoutContactIcon /> <Typography>About me
                    </Typography>
                  </StyledButton>
                </Grid>

              </Grid>
            </Grid>

            <Grid display="flex" padding="0" size={{ xs: 12, md: 4 }}>
              <StyledImg  src={Avatar} alt="" />
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
