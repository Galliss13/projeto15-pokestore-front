import Container from "../../components/Container";
import { Form, Input, StyledLink } from "../../components/Form";

export default function Register() {
  return (
    <Container>
      <Form>
        <Input
          type={"text"}
          name="name"
          value={loginForm.name}
          onChange={changeInput}
          placeholder="Nome"
          required
        ></Input>
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
        <Input
          type={"password"}
          name="repassword"
          value={loginForm.repassword}
          onChange={changeInput}
          placeholder="Repita a senha"
          required
        ></Input>
        <Button type={'submit'} >Cadastrar</Button>
      </Form>
      <StyledLink to='/signin'>Já tem uma conta? Faça login</StyledLink>
    </Container>
  );
}
