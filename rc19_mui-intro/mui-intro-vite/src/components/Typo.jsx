// import {Typography} from "@mui/material"

import Typography from "@mui/material/Typography"  //? burda sadece mui materilin tamamini yuklemen cikariyor

import Button from "@mui/material/Button"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"

const Typo = () => {
  return (

    <Container maxWidth= "sm"> 
    <Box sx= {{padding: "1rem" , display: "flex", flexDirection: "column", gap:"1rem", border: "2px solid tomato"}}>
      <Typography variant="h3" component= "h5" color="red">
        MUI TYPO
      </Typography>

      <Typography variant="subtitle1"  color="blue" mt={2}>
        MUI TYPO
      </Typography>

      <Typography variant="button" sx={{color: "red", backgroundColor: "yellow", mt:"1rem", }}  align="center">
        MUI TYPO
      </Typography>

    </Box>

 <Stack direction="row" spacing={2} mt={3} justifyContent={"center"} alignItems={"center"}>
 <Button variant="outlined" color="primary"> Click </Button>
 <Button variant="contained" color="secondary"> Click </Button>
 <Button  color="error"> Click </Button>
 <Button variant="contained" color="success"> Click </Button>
 <Button variant="contained" color="warning"> Click </Button>
 <Button variant="contained" sx={{color: "purple", backgroundColor:"yellow"}}> Click </Button>
 <Button variant="contained" sx={{color: "primary.dark", backgroundColor:"secondary.light"}}> Click </Button>




 </Stack>




    </Container>
  )
}

export default Typo
