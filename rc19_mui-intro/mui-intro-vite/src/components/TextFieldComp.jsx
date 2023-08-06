import  Typography  from "@mui/material/Typography"
import  Container  from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import { useState } from "react"

const TextFieldComp = () => {

  
  const [err, setErr] = useState(false)
  
  return (

    <Container sx={{mt: 4 ,}} maxWidth="4">

         <Typography variant="h2" mt={2} color={"secondary.dark"}>
        Text Field
      </Typography>
         <TextField id="email " label="Email" variant="outlined" placeholder="Enter your email" required fullWidth margin="normal" error={err} helperText= {err && "Incorrect Email Format" } />
      <TextField id="password" label="Password" variant="filled" placeholder="Enter your password" required fullWidth margin="normal" />
     <TextField id="name" label="Name" variant="standard" placeholder="Enter your name" required fullWidth margin="normal" color="secondary" sx={{color: "error.dark"}}/>
    

    </Container>
  )
}

export default TextFieldComp
