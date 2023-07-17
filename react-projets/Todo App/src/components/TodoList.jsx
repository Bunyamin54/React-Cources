import ListGroup from 'react-bootstrap/ListGroup';

import {AiOutlineDelete  } from 'react-icons/ai';

const TodoList = () => {
  return (
    <ListGroup className='container w-50 mt-5 text-center'>
       <ListGroup.Item variant="info "> <AiOutlineDelete className='text-danger' />  </ListGroup.Item>
       </ListGroup>
  )
}

export default TodoList
