import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from "styled-components";

const ProcessCardContainer = styled.div`
width: 398px;
background: #202020;
display: flex;
flex-direction: column;
margin-bottom: 120px;
border-radius: 20px;
align-items: flex-start;
height: 319px;
padding: 25px 30px;
justify-content: space-between;

&:hover {
    background: #5534F7
}
`

export const ProcessItems = ({ icon, title, subTitle }) => {
    return (<>

<Splide options={{perPage: '3', rewind: true}}>
<SplideSlide>
<ProcessCardContainer>
        <h3>{icon}</h3>
        <div>
        <h4>{title}</h4>
        <h5>{subTitle}</h5>
        </div>
    </ProcessCardContainer>
</SplideSlide>
<SplideSlide>
<ProcessCardContainer>
        <h3>{icon}</h3>
        <div>
        <h4>{title}</h4>
        <h5>{subTitle}</h5>
        </div>
    </ProcessCardContainer>
</SplideSlide>
<SplideSlide>
<ProcessCardContainer>
        <h3>{icon}</h3>
        <div>
        <h4>{title}</h4>
        <h5>{subTitle}</h5>
        </div>
    </ProcessCardContainer>
</SplideSlide>
<SplideSlide>
    <ProcessCardContainer>
        <h3>{icon}</h3>
        <div>
        <h4>{title}</h4>
        <h5>{subTitle}</h5>
        </div>
    </ProcessCardContainer>
</SplideSlide>
</Splide>
    </>
    )
}