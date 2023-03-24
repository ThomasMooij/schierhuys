import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styled from "styled-components";

// bugfile
// add evenlistener if scroll away from this page the picture must close
// pictures must be imported dynamically so admin can upload from admin panel
// import thrid party carousel for better performance, this one sucks

const Container = styled.main`
  width: 100%;
  height: 80%;
  background-color: whitesmoke;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 80%;
  height: 80%;
`
const Slider = styled.div`
  z-index: 999;
  display: flex;
  align-items: center;
`
const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`
const CloseIconDiv = styled.div`
  position: absolute;
  
  right: 415px;
  font-size: 50px;
  color: black;
  cursor: pointer;
`
const Arrow = styled.article`
  margin: 20px;
  font-size: 50px;
  color: black;
  cursor: pointer;
`
const SlideImg = styled.img`
  
`
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ImageWrapper = styled.div`
  width: 33%;
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`
const Photos = () => {

const [open,setOpen] = useState(false)
const [slideNumber, setSlideNumber] = useState(0)


// dynamisch maken door slidenumer te veranderen naar photos.length
const handleMove = (direction) =>{
  let newSlide;

  if(direction === "left"){
    newSlide = slideNumber === 0 ? 5 : slideNumber - 1
  }else{
    newSlide = slideNumber === 5 ? 0 : slideNumber + 1
  }

  setSlideNumber(newSlide)
}

const openImage = (i) =>{
  setSlideNumber(i)
  setOpen(true)
}

const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  },
];

  return (
    <>
      <Container id="Photos"> 
        <Wrapper>

        {open && (
          <Slider>
                <CloseIconDiv 
                  onClick={()=> setOpen(false)}
                ><CloseIcon />
                </CloseIconDiv>

                <Arrow
                  onClick={()=> handleMove('left')}
                  ><KeyboardArrowLeftIcon />
                </Arrow>

                <SlideWrapper>
                  <SlideImg 
                  src={photos[slideNumber].src} 
                  /></SlideWrapper>

                <Arrow
                  onClick={()=> handleMove("right")}
                >
                  <KeyboardArrowRightIcon/>
                </Arrow>
            </Slider>
        )}
        <ImageContainer>
          {photos.map((photo, i) => (
            <ImageWrapper key={i}>
                <Image 
                  onClick={()=> openImage(i)}
                  src={photo.src}
                  ></Image>
            </ImageWrapper>
          ))}
        </ImageContainer>
          </Wrapper>
      </Container>
    </>
  )
}

export default Photos
