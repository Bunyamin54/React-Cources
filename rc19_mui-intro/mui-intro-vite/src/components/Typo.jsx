// import {Typography} from "@mui/material"

import Typography from "@mui/material/Typography"  //? burda sadece mui materilin tamamini yuklemen cikariyor

import Button from "@mui/material/Button"

const Typo = () => {
  return (
    <div>
      <Typography variant="h3" component= "h5" color="red">
        MUI TYPO
      </Typography>

      <Typography variant="subtitle1"  color="blue">
        MUI TYPO
      </Typography>

      <Typography variant="button">
        MUI TYPO
      </Typography>

    </div>
  )
}

export default Typo
