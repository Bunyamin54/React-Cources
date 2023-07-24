import Button from "./styled/Button"
import NavStyled from "./styled/NavStyled"

const Nav = () => {
  return (
    <NavStyled> 
    
       <div>

        <img src="./images/logo.png" width="150px" alt="logo"  />
        
        </div> 
         <div>
         <Button primary>Apply Courses</Button>
         <Button>Talk to Advisere</Button>
         </div>
        
    </NavStyled>
  )
}

export default Nav
