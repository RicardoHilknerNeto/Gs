import styled from "styled-components";
import Dormindo from "../assets/img/dormindonuvens.png";

const Container = styled.div`
  display: flex;
  width: 60%;
  height: 50vh;
  background-color: lightblue;
  border-radius: 10px;
  margin: 0 auto; /* Centraliza horizontalmente */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Valores para a sombra */
  margin-top: 10%;
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
`;
const Title = styled.h2`
  position: relative;
  right: 30%;
  top: 1em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 3em;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 10px);
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
`;
const Img = styled.img`
  width: 50%;
  position: relative;
  top: 20px;
`;
const Member = styled.h2`
  position: relative;
  top: 30%;
  text-decoration: underline;
`;
function Login() {
  return (
    <>
      <Container>
        <Left>
          <Title>Sign In!</Title>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Nome:</Label>
              <Input type="text" id="name" name="name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">E-mail:</Label>
              <Input type="email" id="email" name="email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Senha:</Label>
              <Input type="password" id="password" name="password" required />
            </FormGroup>
            <Button type="submit">Login</Button>
          </Form>
        </Left>
        <Right>
          <Img src={Dormindo} alt="" />
          <Member>Ainda não tenho conta</Member>
        </Right>
      </Container>
    </>
  );
}

export default Login;