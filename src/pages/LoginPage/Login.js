import Container from "../../components/Container";
import { Form, Input, StyledLink } from "react-router-dom";

export default function Login() {
  return (
    <Container>
      <Form>
        <Input
          type={"email"}
          name="email"
          value={loginForm.email}
          onChange={changeInput}
          placeholder="E-mail"
          required
        ></Input>
        <Input
          type={"password"}
          name="password"
          value={loginForm.password}
          onChange={changeInput}
          placeholder="Senha"
          required
        ></Input>
        <Button type={"submit"}>Cadastrar</Button>
      </Form>
      <StyledLink to='/signup'>Não tem uma conta? Cadastre-se</StyledLink>
    </Container>
  );
}
