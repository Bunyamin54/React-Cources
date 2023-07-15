import Accordion from 'react-bootstrap/Accordion';
import data from "../helper/data"

const Question = () => {
  return (
    <div className='question'>
     {data.map((item) => (
        <Accordion className='accordion' defaultActiveKey="0" key={item.id}>
        <Accordion.Item eventKey="1" key={item.id}>
          <Accordion.Header>{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item> 
        </Accordion>
    ))}
    </div>
  )
}

export default Question
