import { useRef } from "react"
import styled from "styled-components"
import emailjs from '@emailjs/browser';

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

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qxjnhra', 'template_hiwr4pd', e.target, 'LTlQv0sg7RiYlKMB4' )
      .then((result) => {
          console.log(result.text);
          {e.target}
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <Main id="Contact">
      <Wrapper>
         <Title>Heeft u vragen? </Title>
         <Title>Neem contact met ons op!</Title>
         <Form ref={form} onSubmit={sendEmail}>
            <Label>Naam</Label>
            <Input type="text" name="name"></Input>
            <Label>Waar gaat uw vraag over</Label>
            <Input type="text" name="subject"></Input>
            <Label>Email</Label>
            <Input type="email" name="email"></Input>
            <Label>message</Label>
            <TextArea name="message"></TextArea>
            <input type="submit" value="Send" />
         </Form>
      </Wrapper>
    </Main>
  )
}

export default Contact
