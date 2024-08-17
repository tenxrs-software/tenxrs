import { InputContainer } from "../../form/Input"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { Pill } from "../Pill"
import { BudgetTitle } from "../../form/BudgetTitle"
import { ContactContainer } from "../ContactContainer"
import { Center} from "../Containers"
import { animated, useSpring } from "react-spring"



const ModalComponent = styled.div`
 position: fixed;
 top: 0;
 height : 100vh;
 background : #030303;
 z-index : 1;
 display: flex;
 flex-direction: column;
 width :90%;
 padding : 80px 25px;
`
const Nav_links = styled.a`
  padding-bottom: 10px;
  background: black;
  border: 1px solid black;
  outline: none;
  margin: 22px 0px;
  border-bottom: 1.5px solid ${(props) => props.theme.colors.common.grey};
  color: white;
  font-size: 14px;
  text-decoration : none;
`


const Modal = (props) => {

    const springs = useSpring({
        from: { y: -30 },
        to: { y: 15 },
  
      })

  return (
   <animated.div style={{display: "flex", flexDirection :'column',zIndex: 1, position:'fixed', height: '100vh', top : '0', background:'#030303', width: '100%' ,...springs}}>
   <ModalComponent onClick={props.onClick}>
        <Nav_links href="#about">Services</Nav_links>
        <Nav_links  href="#industries">Industries</Nav_links>
        <Nav_links href="#process">Our Process</Nav_links>
        <Nav_links href="#contact">Contacts</Nav_links>
        <ContactContainer  $alignCenter={"center"}>
            <Pill>info@tenxrs.com</Pill>
            <BudgetTitle>Cell: 012 345 7890</BudgetTitle>
        </ContactContainer>
   </ModalComponent>
   </animated.div>

  )
}
export default Modal

export const ModalOverlay = (props) => {
      return ( 
        <Center>
            
            {createPortal(<Modal onClick={props.onClick}/>, document.getElementById('modal_overlay'))}
            
        </Center>
      )
}