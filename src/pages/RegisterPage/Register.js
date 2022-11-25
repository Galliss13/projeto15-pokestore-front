import Container from "../../components/Container";
import { mainURL } from "../../constants/URLs";
import { Form, Input, StyledLink } from "../../components/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function Register() {

    const navigate = useNavigate()
    const [signupForm, setSignupForm] = useState({
        name:'',
        email:'',
        password:'',
        repeatPassword:''
    })

    function changeSignUp(e) {
        setSignupForm({...signupForm, [e.target.name]: e.target.value})
    }

    function submitSignUp(e) {
        e.preventDefault()

        const promise = axios.post(`${mainURL}/signup`,{...signupForm})
        promise.then((res) => {
            res.sendStatus(201)
            navigate('/signin')
        })
        promise.catch((err) => {
            console.log(err.message)
        })
    }


  return (
    <Container>
      <Form onSubmit={submitSignUp}>
        <Input
          type={"text"}
          name="name"
          value={loginForm.name}
          onChange={changeSignUp}
          placeholder="Nome"
          required
        ></Input>
        <Input
          type={"email"}
          name="email"
          value={loginForm.email}
          onChange={changeSignUp}
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
          onChange={changeSignUp}
          placeholder="Repita a senha"
          required
        ></Input>
        <Button type={'submit'} >Cadastrar</Button>
      </Form>
      <StyledLink to='/signin'>Já tem uma conta? Faça login</StyledLink>
    </Container>
  );
}
