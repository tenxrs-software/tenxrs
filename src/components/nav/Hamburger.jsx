import React, { useState } from 'react'
import styled from 'styled-components'
import { ModalOverlay } from '../common/modal/Modal'


 
export const Ham_burger = styled.div`
height : 2rem;
width : 2rem;
position : relative;
align-content: center;
top:2px;


div {
width : 2rem;
height: 0.20rem;
background-color : ${props => props.theme.colors.text.white};
margin-bottom: 5px;
border-radius:3px;
transition: all 0.2s ease-in;
transform-origin: 1px;

&:nth-child(1){
    transform: ${props => props.$open ? 'rotate(35deg)' : 'rotate(0deg)'}
}
&:nth-child(2){
    opacity :${props => props.$open ? 0 : 1};
}
&:nth-child(3){
    transform: ${props => props.$open ? 'rotate(-35deg)' : 'rotate(0deg)'}
}

};

@media only screen and (max-width: 500px) and (min-width: 375px) {
    display: block;
    top:0;
    z-index : 3000;
    right:10px;
  }
`



const Hamburger = () => {
const [isActive, setIsActive] = useState(false)

const modalDisplay = () => {
      if(!isActive){
        setIsActive(true)
        
      }else{
        setIsActive(false)
      }

}

  return (
    <div>
        <Ham_burger $open={isActive} onClick={() => {
            modalDisplay()

        }}>
            <div/>
            <div/>
            <div/>
        </Ham_burger>

        {isActive && <ModalOverlay onClick={() => setIsActive(false) }/>}
    </div>
  )
}

export default Hamburger