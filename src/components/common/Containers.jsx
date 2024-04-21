import styled from "styled-components";

export const Center = styled.div`
max-width: 1440px;
width: 100%;
display: flex;
flex-direction: column;
margin: 0 auto;
background: black;
text-align: ${props => props.$text? 'center' : 'left'};
padding-bottom: ${props => props.$end ? '80px' : 0};
`

export const CardContainer = styled.div`
width: 398px;
margin-bottom: 150px;
`

export const IconContainer = styled.div`
width: 80px;
margin-bottom: 150px;
`

export const PillsContainer = styled.div`
display: flex;
gap: ${props => props.$gap? props.$gap : '10px'};
margin-top: ${props => props.$marginTop? props.$marginTop : 0};
`

export const FlexRow = styled.div`
display: flex;
gap: ${props => props.$gap? props.$gap : 'auto'};
`


export const FlexRowContainer = ({ children }) => {
    return (<FlexRow $gap='115px'>
    {children[0]}
    <div>
        {children[1]}
        {children[2]}
    </div>
    </FlexRow>
    )
}
