import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {data} from "../helpers/data"
import PlayerCard from './PlayerCard';


const ContainerCard = () => {
console.log(data)
  const [search,setSearch] = useState("")
  
 const handleChange = (e) => {
 
  setSearch(e.target.value)   //! setter methodu aseyncron olarak calisir. 

 }

 const filtredData = data.filter(item => item.name.toLowerCase().includes(search.trim().toLowerCase()))
 
 console.log(filtredData)
 
 return (
    <>
      <Form.Control type="search" placeholder="Search Player..." onChange={handleChange} />
      <Container className='p-3 rounded-4 card-container my-3'>
        <Row xs={2} md={4} lg={6} className='justifey-content-center g-3'>
          <Col>1 of 2</Col>
         {

          filtredData.map((player,i)=> 
    
 
        //  <PlayerCard  key={i} player = {player} img={player.img} name = {player.name} statistics = {player.statistics} {...player} />
         <PlayerCard  key={i} {...player} />
 
 )


         }
        </Row>
      </Container>
    </>
  );
}

export default ContainerCard