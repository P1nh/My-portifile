import { Container, Grid, styled, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/curriculo.pdf"
import Avatar from "../../../../assets/imgs/avatar.png"
import theme from "../../../../theme";
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    background: "white",
    height: "100vh",
    display: "flex",
    alignItems: "center",

  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "50%",
    position: "relative"
  }))


  const handleDownload = () => {
    console.log("download")
    // Create a link element
    const link = document.createElement('a');
    link.href = CV
    link.download = 'curriculo.pdf'; // Set the download attribute to specify the file name
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  }
  const handleSite = () => {
    window.open('https://github.com/P1nh/My-portifile', '_blank', 'noopener,noreferrer')
  }
  return (
    <>
      <StyledHero>

        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            mx: {
              xs: 'center',  // centralizado em telas pequenas
              md: 2,       // pequena margem nos lados (theme.spacing(2) = 16px)
              xl: 'cnter',  // centralizado em telas extragrandes
            },
            px: {
              xs: 2,       // padding lateral em telas pequenas
              md: 5,       // sem padding, pois a margem já cuida disso
            },
            pt: 0,
          }}
        >

          <Grid container spacing={2} paddingTop="180px">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography fontWeight="" variant="h2" color="secondary">Arthur Pinheiro</Typography>
              <Typography lineHeight="1" variant="h1" color="primary">Website and user interface designer</Typography>
              <Grid  container width="10" spacing={4}>
                <Grid gap={1}size={{ xs: 12, md: 5 }} display="flex" marginTop="10px">

                  <StyledButton onClick={() => handleDownload()} >
                    <DownloadIcon />
                    <Typography>Dowload CV</Typography>
                  </StyledButton>
                  <StyledButton onClick={() => handleSite()} >
                    <GitHubIcon />
                    <Typography>Código deste site</Typography>
                  </StyledButton>
                </Grid>
                    
              </Grid>
            </Grid>

            <Grid display="flex" padding="0" size={{ xs: 12, md: 4 }}>
              <StyledImg src={Avatar} alt="" />
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
