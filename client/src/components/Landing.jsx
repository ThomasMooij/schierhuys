import { useState } from "react"
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from "../dummyData/sliderItems";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Container =styled.main`
width: 100vw;
height: 100vh;
display:flex;
position:relative;
overflow:hidden;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props=>props.slide * -100}vw);
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#FAF9F6; 
border-radius:50%;
display:flex;
position:absolute;
align-items:center;
justify-content:center;
top: 0;
bottom: 0;
left: ${props => props.side === "left" && "10px"};
right: ${props => props.side === "right" && "10px"};
margin: auto;
cursor:pointer;
z-index:2;
`;

const Slide = styled.div`
width: 100%;
height:100%;
display: flex;
align-items: center;
background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.01) 50%, 
  rgba(0, 0, 0, 0.9) 100%), url(${props => props.bg}) ;
background-repeat: no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-size: cover;
`
const SlideContainer = styled.div`
width: 100vw;
height:100vh;
position: relative;
`
const TextContainer = styled.div`
position: relative;
width: 60%;
height:100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Text = styled.p`
position: absolute;
width: 60%;
overflow-wrap: break-word;
top: -280px;
padding: 10px;
color: #5d8238;;
font-weight: 900;
font-size: 44px;
border-radius: 10px;
right: -280px;

`
const Button = styled.button`
position: absolute;
top: -150px;
padding:10px 35px;
font-size:20px;
right:250px;
background-color:#5d8238;
border-radius: 10px;
cursor:pointer;
&:hover{background-color:white}
`
const ArrowDown = styled.div`
width:50px;
height:50px;
background-color:#FAF9F6; 
border-radius:50%;
display:flex;
position:absolute;
align-items:center;
justify-content:center;
top: -100px;
right: 300px;
margin: auto;
cursor:pointer;
z-index:2;
`;

const Landing = () => {

  const [slide, setSlide] = useState(0)

  const handleClick = (side) =>{
    if(side === "left"){
        setSlide( slide > 0 ? slide -1 : 2)
    }else{
        setSlide(slide < 3 ? slide +1 : 0)
    }
};

  return (
    <>
      <Container>
      {slide != 0 ? (
        <Arrow side='left' onClick={()=> handleClick('left')}> <ArrowBackIosIcon /> </Arrow>
        ) : ""
    }
    {/* images wrapper */}
        <Wrapper>
            {sliderItems.map(slide =>(

        <SlideContainer>
            <Slide key={slide.id} bg={slide.img} />
            <TextContainer> 
                <Text>{slide.descr}</Text>       
                <Button> reserveer</Button>
                <ArrowDown><ArrowCircleDownIcon /></ArrowDown>
            </TextContainer>
        </SlideContainer> 
            ))}
        </Wrapper>
        {/* max slide number dynamic.length ? */}
        {slide != 3 ? (
        <Arrow side='right' onClick={()=> handleClick('right')}> <ArrowForwardIosIcon /> </Arrow>
        ) : ""
    }
      </Container>
    </>

  )
}

export default Landing