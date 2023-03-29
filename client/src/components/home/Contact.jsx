import styled from "styled-components"

const Main = styled.main`
  width: 100vw;
  height: 70vh;
  max-width: 100%;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`
const Title = styled.h2`
  font-weight: 600;

  &:nth-child(1){
    font-weight: 400;
  }
` 
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
` 
const Label = styled.label`
  
` 
const Input = styled.input`
  
` 
const TextArea = styled.textarea`
  
` 
const Contact = () => {

  return (
    <Main id="Contact">
      <Wrapper>
         <Title>Heeft u vragen? </Title>
         <Title>Neem contact met ons op!</Title>
         <Form>
            <Label></Label>
            <Input></Input>
            <Label></Label>
            <Input></Input>
            <Label></Label>
            <TextArea></TextArea>
         </Form>
      </Wrapper>
    </Main>
  )
}

export default Contact
