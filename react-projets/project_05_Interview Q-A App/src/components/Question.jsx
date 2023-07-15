import Accordion from 'react-bootstrap/Accordion';

const Question = () => {
  return (
    <div>
        
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro, impedit eius non dolore ipsa minus earum alias! Iusto, labore!
        </Accordion.Body>
      </Accordion.Item> 
      </Accordion>

    </div>
  )
}

export default Question
