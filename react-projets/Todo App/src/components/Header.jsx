import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Header = () => {
  return (
      
  <div className='container w-50 mt-5 text-center text-danger'> 

    <h1>Todo App</h1>
  
     <InputGroup className="mb-3 mt-4">
        <Form.Control
          placeholder="Enter new todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className='bg-success text-light' variant="outline-secondary" id="button-addon2">
         Add Todo
        </Button>
      </InputGroup>


      </div>
  )
}

export default Header
