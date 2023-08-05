import  Container  from "@mui/material/Container"
import TextField from "@mui/material/TextField"

const TextFieldComp = () => {
  return (
    <Container sx={{mt: 4 ,}} maxWidth="4">
         <TextField id="email " label="Email" variant="outlined" placeholder="Enter your email" required fullWidth margin="normal"/>
      <TextField id="password" label="Password" variant="filled" placeholder="Enter your password" required fullWidth margin="normal" />
     <TextField id="name" label="Name" variant="standard" placeholder="Enter your name" required fullWidth margin="normal" color="secondary"/>
    

    </Container>
  )
}

export default TextFieldComp
