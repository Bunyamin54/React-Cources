import styled from 'styled-components';

const Flex = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:1rem;
max-width: 1000px;
margin:auto;
background-color: ${ (props) => props.bg || "transparent"};
/* background-color: ${ (bg) => bg || "transparent"};  //? kisa yontem  icerik de bg varsa aktarir */
 
`

export default Flex;
