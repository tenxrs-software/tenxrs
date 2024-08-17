import React, { useEffect, useState } from 'react'
import { Line } from '../common/LineDivider'
import {Subtitle} from '../common/Subtitle'
import { Center } from '../common/Containers'
import styled from 'styled-components'
import DivImage from '../../assets/holographic.png'



export const AboutImageDiv = styled.div`
    background-image : url(${props => props.$backgroundImage});
    height : 314px;
    border-radius : 20px;
    width : 100%;
    background-size: cover;
    background-repeat : no-repeat;
    background-position: center;
    margin-bottom: 100px;

    @media only screen and  (max-width : 500px){
        height:150px
    }
`
export const StatsDiv = styled.div`
    display: flex;
    justify-content : space-between;
    color : ${props => props.theme.colors.text.white};
    max-width : 409px;
    margin-bottom: 60px;
    
    p{
        font-weight:300;
        color :  #CCCCCC;
    }
    `
export const StatsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content : center;
    text-align: center;
    
    h1{
        margin : 0;
    }
    `
export const CompanyDescription = styled.p` 
    color :  #CCCCCC;
    font-size : ${props => props.theme.font.sizes.button};
    font-weight : 400px;
    line-height:30px;
    max-width : 1178px
`


const AboutUs = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let interval =  setInterval(() => {
            setCounter(counter + 1)
        }, 1000)
        if(counter === 4){
            clearInterval(interval)
        }
    }, [])
 
   

  return (
    <>
    <Center>
         <Subtitle $Margin={'0 0 20px'}>
            Why Work With Us 
         </Subtitle>
         <Line $marginBottom={'40px'}/>
         <StatsDiv>
                <StatsContent>
                    <Subtitle>
                        {counter}+
                    </Subtitle>
                    <p>Members</p>
                </StatsContent>
                <StatsContent>
                    <Subtitle>
                        20+
                    </Subtitle>
                    <p>Happy Clients</p>
                </StatsContent>
                <StatsContent>
                    <Subtitle>
                        15+
                    </Subtitle>
                    <p>Work tools</p>
                </StatsContent>
         </StatsDiv>
         <Subtitle $Margin={'0 0 20px'}>
            About Us
         </Subtitle>
        <CompanyDescription>
            Tenxrs is a vibrant startup with a dedicated team of four professionals committed to transforming ideas into digital realities. 
            Our journey began with a shared passion for creating seamless user experiences and
            innovative software 
            solutions.
        </CompanyDescription>
        <AboutImageDiv $backgroundImage={DivImage}/>
    </Center>
    </>
  )
}

export default AboutUs


// let a = 0;
// const interval = setInterval(logCountUp, 2000);

// function logCountUp() {
//   a+=1; console.log(`${a}`);
//   if(a === 9) clearInterval(interval);
// }

