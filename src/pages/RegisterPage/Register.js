import Container from "../../components/Container";
import { Form, Input } from "../../components/Form";

export default function Register() {
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
        <Input
          type={"email"}
          name="email"
          value={loginForm.email}
          onChange={changeInput}
          placeholder="E-mail"
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
      </Form>
    </Container>
  );
}
